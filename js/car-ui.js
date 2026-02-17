const brand = document.getElementById("brand");
const model = document.getElementById("model");
const year = document.getElementById("year");

function loadBrands(){
  brand.innerHTML = `<option value="">Marka</option>`;

  Object.keys(CAR_DATA).sort().forEach(b=>{
    brand.innerHTML += `<option>${b}</option>`;
  });
}

brand.addEventListener("change", ()=>{
  const b = brand.value;

  model.innerHTML = `<option value="">Model</option>`;
  year.innerHTML = `<option value="">Yıl</option>`;

  if(!CAR_DATA[b]) return;

  Object.keys(CAR_DATA[b]).sort().forEach(m=>{
    model.innerHTML += `<option>${m}</option>`;
  });
});

model.addEventListener("change", ()=>{
  const b = brand.value;
  const m = model.value;

  year.innerHTML = `<option value="">Yıl</option>`;

  if(!CAR_DATA[b] || !CAR_DATA[b][m]) return;

  CAR_DATA[b][m].forEach(y=>{
    year.innerHTML += `<option>${y}</option>`;
  });
});
// Uygula
function saveFilters() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;

  console.log("Seçilen:", brand, model, year);

  alert("Filtre uygulandı:\n" + brand + " " + model + " " + year);
}

// Sıfırla
function clearFilters() {
  document.getElementById("brand").selectedIndex = 0;
  document.getElementById("model").innerHTML = '<option value="">Model</option>';
  document.getElementById("year").innerHTML = '<option value="">Model Yılı</option>';
}
loadBrands();