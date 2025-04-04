import { create } from 'zustand';

const useStore = create((set) => ({
  // Projects
  projects: [],
  selectedProject: null,
  setProjects: (projects) => set({ projects }),
  setSelectedProject: (project) => set({ selectedProject: project }),
  addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
  updateProject: (updatedProject) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === updatedProject.id ? updatedProject : p
      ),
    })),
  deleteProject: (projectId) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== projectId),
    })),

  // Clients
  clients: [],
  selectedClient: null,
  setClients: (clients) => set({ clients }),
  setSelectedClient: (client) => set({ selectedClient: client }),
  addClient: (client) => set((state) => ({ clients: [...state.clients, client] })),
  updateClient: (updatedClient) =>
    set((state) => ({
      clients: state.clients.map((c) =>
        c.id === updatedClient.id ? updatedClient : c
      ),
    })),
  deleteClient: (clientId) =>
    set((state) => ({
      clients: state.clients.filter((c) => c.id !== clientId),
    })),

  // Tasks
  tasks: [],
  selectedTask: null,
  setTasks: (tasks) => set({ tasks }),
  setSelectedTask: (task) => set({ selectedTask: task }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      ),
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== taskId),
    })),

  // Products
  products: [],
  selectedProduct: null,
  setProducts: (products) => set({ products }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      ),
    })),
  deleteProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== productId),
    })),

  // Vendors
  vendors: [],
  selectedVendor: null,
  setVendors: (vendors) => set({ vendors }),
  setSelectedVendor: (vendor) => set({ selectedVendor: vendor }),
  addVendor: (vendor) => set((state) => ({ vendors: [...state.vendors, vendor] })),
  updateVendor: (updatedVendor) =>
    set((state) => ({
      vendors: state.vendors.map((v) =>
        v.id === updatedVendor.id ? updatedVendor : v
      ),
    })),
  deleteVendor: (vendorId) =>
    set((state) => ({
      vendors: state.vendors.filter((v) => v.id !== vendorId),
    })),

  // UI State
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  modalOpen: false,
  setModalOpen: (open) => set({ modalOpen: open }),
  modalContent: null,
  setModalContent: (content) => set({ modalContent: content }),
}));

export default useStore; 