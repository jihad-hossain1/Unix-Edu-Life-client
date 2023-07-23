//get all collage
export const getAllCollage = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/collage`);
  const data = await response.json();
  return data;
};

//get a collage
export const getCollage = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/collage/${id}`
  );
  const data = await response.json();
  return data;
};
