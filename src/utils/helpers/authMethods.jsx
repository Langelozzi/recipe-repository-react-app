import axios from "../hooks/axios";

const logout = () => {
  localStorage.removeItem("accessToken");
  window.location.reload();
};

const login = async (email, password) => {
  const body = {
    email,
    password,
  };

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL_BASE}/auth/login`,
      body
    );

    if (response.status == 200) {
      localStorage.setItem("accessToken", response.data.accessToken);
      // go to the home page
      window.location.href = "/home";
    }
  } catch (error) {
    if (error.response.status == 400) {
      console.log("Login failed: " + error.response.data);
    } else {
      console.log("An unexpected error occurred.");
    }
  }
};

export { logout, login };
