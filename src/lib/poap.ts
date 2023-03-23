export const getPoaps = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-key": process.env.POAP_API_KEY || "",
      },
    };
    const response = await fetch(
      "https://api.poap.tech/actions/scan/nbiondini.eth",
      options
    );
    const data: poap[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
