async function getProducts() {
  const res = await fetch("veri/urunler.json");
  return await res.json();
}
