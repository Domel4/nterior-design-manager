import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, signIn, signUp, signOut, resetPassword } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state (signed in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Sign in with email and password
  const handleSignIn = async (email, password) => {
    try {
      const { user: authUser } = await signIn(email, password);
      setUser(authUser);
      navigate('/dashboard');
      toast.success('Successfully signed in!');
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Sign up with email and password
  const handleSignUp = async (email, password) => {
    try {
      const { user: authUser } = await signUp(email, password);
      setUser(authUser);
      navigate('/dashboard');
      toast.success('Successfully signed up! Please check your email to verify your account.');
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      navigate('/login');
      toast.success('Successfully signed out!');
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Reset password
  const handleResetPassword = async (email) => {
    try {
      await resetPassword(email);
      toast.success('Password reset email sent!');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
    resetPassword: handleResetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 