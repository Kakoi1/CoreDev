import api from "@lib/axios";
export const getCsrfToken = async () => {
  await api.get("http://localhost:8000/sanctum/csrf-cookie");

  const xsrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="))
    ?.split("=")[1];

  if (!xsrfToken) {
    throw new Error("CSRF token not found");
  }

  console.log(`CSRF TOKEN: ${xsrfToken}`)

  return decodeURIComponent(xsrfToken);
};

export const sendInquiry = async (inquiryData) => {
  const token = await getCsrfToken();

  return api.post("http://localhost:8000/api/send-email", inquiryData, {
    headers: {
      "X-XSRF-TOKEN": token,
    },
  });
};
