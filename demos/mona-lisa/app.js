const WA = "351919391079";
const KEY = "monalisa_data_v2";

const DEFAULTS = {
  promo: { title: "Cliente fiel? 5ª escova com oferta de hidratação.", text: "Mostre esta página no salão. Válido para marcações desta semana." },
  groups: [
    { id:"corte", pt:"Corte & Escova", en:"Cut & Blow-dry", desc_pt:"Diagnóstico gratuito incluído", desc_en:"Free diagnosis included",
      items:[
        { pt:"Corte mulher + escova", en:"Women's cut + blow-dry", price:"25€", dur_pt:"60 min", dur_en:"60 min" },
        { pt:"Corte homem", en:"Men's cut", price:"15€", dur_pt:"30 min", dur_en:"30 min" },
        { pt:"Escova", en:"Blow-dry", price:"15€", dur_pt:"30–45 min", dur_en:"30–45 min" },
        { pt:"Corte criança até 10 anos", en:"Kids cut under 10", price:"12€", dur_pt:"30 min", dur_en:"30 min" }
      ]},
    { id:"cor", pt:"Cor & Luzes", en:"Colour & Highlights", desc_pt:"Tinta profissional + tratamento", desc_en:"Professional colour + treatment",
      items:[
        { pt:"Coloração raiz", en:"Root colour", price:"desde 30€", dur_pt:"90 min", dur_en:"90 min" },
        { pt:"Balayage / luzes", en:"Balayage / highlights", price:"desde 55€", dur_pt:"2h30", dur_en:"2h30" },
        { pt:"Tonalizante + brilho", en:"Gloss toner", price:"20€", dur_pt:"45 min", dur_en:"45 min" }
      ]},
    { id:"festa", pt:"Festa & Noivas", en:"Events & Brides", desc_pt:"Com prova marcada", desc_en:"With trial session",
      items:[
        { pt:"Penteado festa", en:"Party styling", price:"25€", dur_pt:"45 min", dur_en:"45 min" },
        { pt:"Noiva (prova + dia)", en:"Bride (trial + day)", price:"sob orçamento", dur_pt:"—", dur_en:"—" },
        { pt:"Maquilhagem", en:"Makeup", price:"20€", dur_pt:"40 min", dur_en:"40 min" }
      ]}
  ]
};

function load(){
  try{ const raw = localStorage.getItem(KEY); if(!raw) return structuredClone(DEFAULTS);
    const d = JSON.parse(raw); if(!d.groups) return structuredClone(DEFAULTS); return d;
  }catch{ return structuredClone(DEFAULTS); }
}
let lang = "pt";
const data = load();

function t(obj, f){ return lang==="pt" ? (obj[f+"_pt"] ?? obj.pt) : (obj[f+"_en"] ?? obj.en); }

function render(){
  const list = document.getElementById("priceList"); list.innerHTML = "";
  const sel = document.getElementById("serviceSelect"); if(sel) sel.innerHTML = "";
  data.groups.forEach(g=>{
    const div = document.createElement("div"); div.className = "price-group";
    div.innerHTML = `<h3>${lang==="pt"?g.pt:g.en}</h3><p>${lang==="pt"?(g.desc_pt||""):(g.desc_en||"")}</p>`;
    g.items.forEach(it=>{
      const name = lang==="pt"?it.pt:it.en; const dur = lang==="pt"?(it.dur_pt||""):(it.dur_en||"");
      const msg = encodeURIComponent(`Olá Mona Lisa! Queria marcação: ${it.pt} (${it.price}). Nome: `);
      const row = document.createElement("div"); row.className="price-row";
      row.innerHTML = `<a href="https://wa.me/${WA}?text=${msg}" target="_blank" rel="noopener"><span>${name}<small>${dur}</small></span></a><strong>${it.price}</strong>`;
      div.appendChild(row);
      if(sel){ const o=document.createElement("option"); o.value=it.pt; o.textContent=`${it.pt} — ${it.price}`; sel.appendChild(o); }
    });
    list.appendChild(div);
  });
  const pb = document.getElementById("promoBanner");
  if(data.promo && data.promo.title){ pb.hidden=false;
    document.getElementById("promoTitle").textContent = (lang==="pt"?data.promo.title:data.promo.title);
    document.getElementById("promoText").textContent = " " + (data.promo.text||"");
  } else pb.hidden = true;
  document.querySelectorAll("[data-pt]").forEach(el=>{
    const v = lang==="pt"?el.getAttribute("data-pt"):el.getAttribute("data-en");
    if(v) el.textContent = v;
  });
  document.getElementById("langToggle").textContent = lang==="pt"?"EN":"PT";
  document.documentElement.lang = lang==="pt"?"pt-PT":"en";
}

document.getElementById("langToggle").addEventListener("click", ()=>{ lang = lang==="pt"?"en":"pt"; render(); });

document.getElementById("bookForm").addEventListener("submit", e=>{
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = encodeURIComponent(`Olá Mona Lisa Hair Studio! Sou ${f.get("nome")}. Queria marcação: ${f.get("servico")} — ${f.get("dia")} às ${f.get("hora")}. Confirmam?`);
  window.open(`https://wa.me/${WA}?text=${msg}`,"_blank");
});
render();
