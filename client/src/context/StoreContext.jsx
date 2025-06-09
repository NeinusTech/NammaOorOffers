import { createContext, useContext, useReducer } from "react";
import api from "../Services/api"; // Axios instance with baseURL and token

const StoreContext = createContext();

const initialState = {
  stores: [],
  myStore: null,
  storeDetails: null,
  users: [],
  loading: false,
  error: null,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_ALL_SUCCESS":
      return { ...state, loading: false, stores: action.payload };
    case "FETCH_MY_STORE_SUCCESS":
      return { ...state, loading: false, myStore: action.payload };
    case "FETCH_STORE_BY_ID_SUCCESS":
      return { ...state, loading: false, storeDetails: action.payload };
    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // ✅ Get all stores
  const fetchAllStores = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await api.get("/store/all");
      dispatch({ type: "FETCH_ALL_SUCCESS", payload: res.data.stores });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response?.data?.msg || "Failed to fetch stores",
      });
    }
  };

  // ✅ Get current user's store
  const fetchMyStore = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await api.get("/store/my");
      dispatch({ type: "FETCH_MY_STORE_SUCCESS", payload: res.data.store });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response?.data?.msg || "Failed to fetch your store",
      });
    }
  };

  // ✅ Get store by ID
  const fetchStoreById = async (id) => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await api.get(`/store/${id}`);
      dispatch({ type: "FETCH_STORE_BY_ID_SUCCESS", payload: res.data.store });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response?.data?.msg || "Failed to fetch store details",
      });
    }
  };

  // ✅ Create a store (only for 'store' role)
  const createStore = async (formData) => {
    try {
      const res = await api.post("/store/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.msg || "Store creation failed");
    }
  };

  // ✅ Update a store
  const updateStore = async (formData) => {
    try {
      const res = await api.put("/store/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.msg || "Store update failed");
    }
  };

  // ✅ Get users by role (admin only)
  const fetchUsersByRole = async (role) => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await api.get(`/store/users/${role}`);
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: res.data.users });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response?.data?.msg || "Failed to fetch users",
      });
    }
  };

  return (
    <StoreContext.Provider
      value={{
        ...state,
        fetchAllStores,
        fetchMyStore,
        fetchStoreById,
        createStore,
        updateStore,
        fetchUsersByRole,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
