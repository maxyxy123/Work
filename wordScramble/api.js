export async function api() {
  try {
    const response = await fetch(
      "https://www.wordgamedb.com/api/v2/words/random"
    );
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`${response.status},${err}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Loi", error);
  }
}

