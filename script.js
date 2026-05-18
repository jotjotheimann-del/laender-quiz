const countries = [
    { land: "Afghanistan", hauptstadt: "Kabul", flag: "https://flagcdn.com/w320/af.png" },
    { land: "Ägypten", hauptstadt: "Kairo", flag: "https://flagcdn.com/w320/eg.png" },
    { land: "Albanien", hauptstadt: "Tirana", flag: "https://flagcdn.com/w320/al.png" },
    { land: "Algerien", hauptstadt: "Algier", flag: "https://flagcdn.com/w320/dz.png" },
    { land: "Andorra", hauptstadt: "Andorra la Vella", flag: "https://flagcdn.com/w320/ad.png" },
    { land: "Angola", hauptstadt: "Luanda", flag: "https://flagcdn.com/w320/ao.png" },
    { land: "Antigua und Barbuda", hauptstadt: "Saint John’s", flag: "https://flagcdn.com/w320/ag.png" },
    { land: "Äquatorialguinea", hauptstadt: ["Malabo", "Ciudad de la Paz"], flag: "https://flagcdn.com/w320/gq.png" },
    { land: "Argentinien", hauptstadt: "Buenos Aires", flag: "https://flagcdn.com/w320/ar.png" },
    { land: "Armenien", hauptstadt: "Jerewan", flag: "https://flagcdn.com/w320/am.png" },
    { land: "Aserbaidschan", hauptstadt: "Baku", flag: "https://flagcdn.com/w320/az.png" },
    { land: "Äthiopien", hauptstadt: "Addis Abeba", flag: "https://flagcdn.com/w320/et.png" },
    { land: "Australien", hauptstadt: "Canberra", flag: "https://flagcdn.com/w320/au.png" },
    
    { land: "Bahamas", hauptstadt: "Nassau", flag: "https://flagcdn.com/w320/bs.png" },
    { land: "Bahrain", hauptstadt: "Manama", flag: "https://flagcdn.com/w320/bh.png" },
    { land: "Bangladesch", hauptstadt: "Dhaka", flag: "https://flagcdn.com/w320/bd.png" },
    { land: "Barbados", hauptstadt: "Bridgetown", flag: "https://flagcdn.com/w320/bb.png" },
    { land: "Belarus", hauptstadt: "Minsk", flag: "https://flagcdn.com/w320/by.png" },
    { land: "Belgien", hauptstadt: "Brüssel", flag: "https://flagcdn.com/w320/be.png" },
    { land: "Belize", hauptstadt: "Belmopan", flag: "https://flagcdn.com/w320/bz.png" },
    { land: "Benin", hauptstadt: ["Porto-Novo", "Cotonou"], flag: "https://flagcdn.com/w320/bj.png" },
    { land: "Bhutan", hauptstadt: "Thimphu", flag: "https://flagcdn.com/w320/bt.png" },
    { land: "Bolivien", hauptstadt: ["Sucre", "La Paz"], flag: "https://flagcdn.com/w320/bo.png" },
    { land: "Bosnien und Herzegowina", hauptstadt: "Sarajevo", flag: "https://flagcdn.com/w320/ba.png" },
    { land: "Botswana", hauptstadt: "Gaborone", flag: "https://flagcdn.com/w320/bw.png" },
    { land: "Brasilien", hauptstadt: "Brasília", flag: "https://flagcdn.com/w320/br.png" },
    { land: "Brunei", hauptstadt: "Bandar Seri Begawan", flag: "https://flagcdn.com/w320/bn.png" },
    { land: "Bulgarien", hauptstadt: "Sofia", flag: "https://flagcdn.com/w320/bg.png" },
    { land: "Burkina Faso", hauptstadt: "Ouagadougou", flag: "https://flagcdn.com/w320/bf.png" },
    { land: "Burundi", hauptstadt: "Gitega", flag: "https://flagcdn.com/w320/bi.png" },

    { land: "Chile", hauptstadt: "Santiago", flag: "https://flagcdn.com/w320/cl.png" },
    { land: "China", hauptstadt: "Peking", flag: "https://flagcdn.com/w320/cn.png" },
    { land: "Costa Rica", hauptstadt: "San José", flag: "https://flagcdn.com/w320/cr.png" },

    { land: "Dänemark", hauptstadt: "Kopenhagen", flag: "https://flagcdn.com/w320/dk.png" },
    { land: "Deutschland", hauptstadt: "Berlin", flag: "https://flagcdn.com/w320/de.png" },
    { land: "Dominica", hauptstadt: "Roseau", flag: "https://flagcdn.com/w320/dm.png" },
    { land: "Dominikanische Republik", hauptstadt: "Santo Domingo", flag: "https://flagcdn.com/w320/do.png" },
    { land: "Dschibuti", hauptstadt: "Dschibuti", flag: "https://flagcdn.com/w320/dj.png" },

    { land: "Ecuador", hauptstadt: "Quito", flag: "https://flagcdn.com/w320/ec.png" },
    { land: "El Salvador", hauptstadt: "San Salvador", flag: "https://flagcdn.com/w320/sv.png" },
    { land: "Elfenbeinküste", hauptstadt: ["Yamoussoukro", "Abidjan"], flag: "https://flagcdn.com/w320/ci.png" },
    { land: "Eritrea", hauptstadt: "Asmara", flag: "https://flagcdn.com/w320/er.png" },
    { land: "Estland", hauptstadt: "Tallinn", flag: "https://flagcdn.com/w320/ee.png" },
    { land: "Eswatini", hauptstadt: ["Mbabane", " Lobamba"], flag: "https://flagcdn.com/w320/sz.png" },

    { land: "Fidschi", hauptstadt: "Suva", flag: "https://flagcdn.com/w320/fj.png" },
    { land: "Finnland", hauptstadt: "Helsinki", flag: "https://flagcdn.com/w320/fi.png" },
    { land: "Frankreich", hauptstadt: "Paris", flag: "https://flagcdn.com/w320/fr.png" },

    { land: "Gabun", hauptstadt: "Libreville", flag: "https://flagcdn.com/w320/ga.png" },
    { land: "Gambia", hauptstadt: "Banjul", flag: "https://flagcdn.com/w320/gm.png" },
    { land: "Georgien", hauptstadt: "Tiflis", flag: "https://flagcdn.com/w320/ge.png" },
    { land: "Ghana", hauptstadt: "Accra", flag: "https://flagcdn.com/w320/gh.png" },
    { land: "Griechenland", hauptstadt: "Athen", flag: "https://flagcdn.com/w320/gr.png" },
    { land: "Guatemala", hauptstadt: "Guatemala-Stadt", flag: "https://flagcdn.com/w320/gt.png" },
    { land: "Guinea", hauptstadt: "Conakry", flag: "https://flagcdn.com/w320/gn.png" },
    { land: "Guyana", hauptstadt: "Georgetown", flag: "https://flagcdn.com/w320/gy.png" },

    { land: "Haiti", hauptstadt: "Port-au-Prince", flag: "https://flagcdn.com/w320/ht.png" },
    { land: "Honduras", hauptstadt: "Tegucigalpa", flag: "https://flagcdn.com/w320/hn.png" },

    { land: "Indien", hauptstadt: "Neu-Delhi", flag: "https://flagcdn.com/w320/in.png" },
    { land: "Indonesien", hauptstadt: "Jakarta", flag: "https://flagcdn.com/w320/id.png" },
    { land: "Irak", hauptstadt: "Bagdad", flag: "https://flagcdn.com/w320/iq.png" },
    { land: "Iran", hauptstadt: "Teheran", flag: "https://flagcdn.com/w320/ir.png" },
    { land: "Irland", hauptstadt: "Dublin", flag: "https://flagcdn.com/w320/ie.png" },
    { land: "Island", hauptstadt: "Reykjavík", flag: "https://flagcdn.com/w320/is.png" },
    { land: "Israel", hauptstadt: "Jerusalem", flag: "https://flagcdn.com/w320/il.png" },
    { land: "Italien", hauptstadt: "Rom", flag: "https://flagcdn.com/w320/it.png" },

    { land: "Jamaika", hauptstadt: "Kingston", flag: "https://flagcdn.com/w320/jm.png" },
    { land: "Japan", hauptstadt: "Tokio", flag: "https://flagcdn.com/w320/jp.png" },
    { land: "Jemen", hauptstadt: "Sanaa", flag: "https://flagcdn.com/w320/ye.png" },
    { land: "Jordanien", hauptstadt: "Amman", flag: "https://flagcdn.com/w320/jo.png" },

    { land: "Kambodscha", hauptstadt: "Phnom Penh", flag: "https://flagcdn.com/w320/kh.png" },
    { land: "Kamerun", hauptstadt: "Yaoundé", flag: "https://flagcdn.com/w320/cm.png" },
    { land: "Kanada", hauptstadt: "Ottawa", flag: "https://flagcdn.com/w320/ca.png" },
    { land: "Kap Verde", hauptstadt: "Praia", flag: "https://flagcdn.com/w320/cv.png" },
    { land: "Kasachstan", hauptstadt: "Astana", flag: "https://flagcdn.com/w320/kz.png" },
    { land: "Katar", hauptstadt: "Doha", flag: "https://flagcdn.com/w320/qa.png" },
    { land: "Kenia", hauptstadt: "Nairobi", flag: "https://flagcdn.com/w320/ke.png" },
    { land: "Kirgisistan", hauptstadt: "Bischkek", flag: "https://flagcdn.com/w320/kg.png" },
    { land: "Kiribati", hauptstadt: "South Tarawa", flag: "https://flagcdn.com/w320/ki.png" },
    { land: "Kolumbien", hauptstadt: "Bogotá", flag: "https://flagcdn.com/w320/co.png" },
    { land: "Komoren", hauptstadt: "Moroni", flag: "https://flagcdn.com/w320/km.png" },
    { land: "Kongo(Demokratische Republik)", hauptstadt: "Kinshasa", flag: "https://flagcdn.com/w320/cd.png" },
    { land: "Kongo(Republik)", hauptstadt: "Brazzaville", flag: "https://flagcdn.com/w320/cg.png" },
    { land: "Kroatien", hauptstadt: "Zagreb", flag: "https://flagcdn.com/w320/hr.png" },
    { land: "Kuba", hauptstadt: "Havanna", flag: "https://flagcdn.com/w320/cu.png" },
    { land: "Kuwait", hauptstadt: "Kuwait-Stadt", flag: "https://flagcdn.com/w320/kw.png" },

    { land: "Laos", hauptstadt: "Vientiane", flag: "https://flagcdn.com/w320/la.png" },
    { land: "Lesotho", hauptstadt: "Maseru", flag: "https://flagcdn.com/w320/ls.png" },
    { land: "Lettland", hauptstadt: "Riga", flag: "https://flagcdn.com/w320/lv.png" },
    { land: "Libanon", hauptstadt: "Beirut", flag: "https://flagcdn.com/w320/lb.png" },
    { land: "Liberia", hauptstadt: "Monrovia", flag: "https://flagcdn.com/w320/lr.png" },
    { land: "Libyen", hauptstadt: "Tripolis", flag: "https://flagcdn.com/w320/ly.png" },
    { land: "Liechtenstein", hauptstadt: "Vaduz", flag: "https://flagcdn.com/w320/li.png" },
    { land: "Litauen", hauptstadt: "Vilnius", flag: "https://flagcdn.com/w320/lt.png" },
    { land: "Luxemburg", hauptstadt: "Luxemburg", flag: "https://flagcdn.com/w320/lu.png" },

    { land: "Madagaskar", hauptstadt: "Antananarivo", flag: "https://flagcdn.com/w320/mg.png" },
    { land: "Malawi", hauptstadt: "Lilongwe", flag: "https://flagcdn.com/w320/mw.png" },
    { land: "Malaysia", hauptstadt: ["Kuala Lumpur", "Putrajaya"], flag: "https://flagcdn.com/w320/my.png" },
    { land: "Malediven", hauptstadt: "Malé", flag: "https://flagcdn.com/w320/mv.png" },
    { land: "Mali", hauptstadt: "Bamako", flag: "https://flagcdn.com/w320/ml.png" },
    { land: "Malta", hauptstadt: "Valletta", flag: "https://flagcdn.com/w320/mt.png" },
    { land: "Marokko", hauptstadt: "Rabat", flag: "https://flagcdn.com/w320/ma.png" },
    { land: "Marshallinseln", hauptstadt: "Majuro", flag: "https://flagcdn.com/w320/mh.png" },
    { land: "Mauretanien", hauptstadt: "Nouakchott", flag: "https://flagcdn.com/w320/mr.png" },
    { land: "Mauritius", hauptstadt: "Port Louis", flag: "https://flagcdn.com/w320/mu.png" },
    { land: "Mexiko", hauptstadt: "Mexiko-Stadt", flag: "https://flagcdn.com/w320/mx.png" },
    { land: "Mikronesien", hauptstadt: "Palikir", flag: "https://flagcdn.com/w320/fm.png" },
    { land: "Moldau", hauptstadt: "Chișinău", flag: "https://flagcdn.com/w320/md.png" },
    { land: "Monaco", hauptstadt: "Monaco", flag: "https://flagcdn.com/w320/mc.png" },
    { land: "Mongolei", hauptstadt: "Ulaanbaatar", flag: "https://flagcdn.com/w320/mn.png" },
    { land: "Montenegro", hauptstadt: "Podgorica", flag: "https://flagcdn.com/w320/me.png" },
    { land: "Mosambik", hauptstadt: "Maputo", flag: "https://flagcdn.com/w320/mz.png" },
    { land: "Myanmar", hauptstadt: "Naypyidaw", flag: "https://flagcdn.com/w320/mm.png" },

    { land: "Namibia", hauptstadt: "Windhoek", flag: "https://flagcdn.com/w320/na.png" },
    { land: "Nauru", hauptstadt: "Yaren", flag: "https://flagcdn.com/w320/nr.png" },
    { land: "Nepal", hauptstadt: "Kathmandu", flag: "https://flagcdn.com/w320/np.png" },
    { land: "Neuseeland", hauptstadt: "Wellington", flag: "https://flagcdn.com/w320/nz.png" },
    { land: "Nicaragua", hauptstadt: "Managua", flag: "https://flagcdn.com/w320/ni.png" },
    { land: "Niederlande", hauptstadt: ["Amsterdam", "Den Haag"], flag: "https://flagcdn.com/w320/nl.png" },
    { land: "Niger", hauptstadt: "Niamey", flag: "https://flagcdn.com/w320/ne.png" },
    { land: "Nigeria", hauptstadt: "Abuja", flag: "https://flagcdn.com/w320/ng.png" },
    { land: "Nordkorea", hauptstadt: "Pjöngjang", flag: "https://flagcdn.com/w320/kp.png" },
    { land: "Nordmazedonien", hauptstadt: "Skopje", flag: "https://flagcdn.com/w320/mk.png" },
    { land: "Norwegen", hauptstadt: "Oslo", flag: "https://flagcdn.com/w320/no.png" },

    { land: "Oman", hauptstadt: "Maskat", flag: "https://flagcdn.com/w320/om.png" },
    { land: "Österreich", hauptstadt: "Wien", flag: "https://flagcdn.com/w320/at.png" },
    { land: "Osttimor", hauptstadt: "Dili", flag: "https://flagcdn.com/w320/tl.png" },

    { land: "Pakistan", hauptstadt: "Islamabad", flag: "https://flagcdn.com/w320/pk.png" },
    { land: "Palästina", hauptstadt: ["Ramallah", "Ostjerusalem"], flag: "https://flagcdn.com/w320/ps.png" },
    { land: "Palau", hauptstadt: "Ngerulmud", flag: "https://flagcdn.com/w320/pw.png" },
    { land: "Panama", hauptstadt: "Panama-Stadt", flag: "https://flagcdn.com/w320/pa.png" },
    { land: "Papua-Neuguinea", hauptstadt: "Port Moresby", flag: "https://flagcdn.com/w320/pg.png" },
    { land: "Paraguay", hauptstadt: "Asunción", flag: "https://flagcdn.com/w320/py.png" },
    { land: "Peru", hauptstadt: "Lima", flag: "https://flagcdn.com/w320/pe.png" },
    { land: "Philippinen", hauptstadt: "Manila", flag: "https://flagcdn.com/w320/ph.png" },
    { land: "Polen", hauptstadt: "Warschau", flag: "https://flagcdn.com/w320/pl.png" },
    { land: "Portugal", hauptstadt: "Lissabon", flag: "https://flagcdn.com/w320/pt.png" },

    { land: "Ruanda", hauptstadt: "Kigali", flag: "https://flagcdn.com/w320/rw.png" },
    { land: "Rumänien", hauptstadt: "Bukarest", flag: "https://flagcdn.com/w320/ro.png" },
    { land: "Russland", hauptstadt: "Moskau", flag: "https://flagcdn.com/w320/ru.png" },

    { land: "St. Kitts und Nevis", hauptstadt: "Basseterre", flag: "https://flagcdn.com/w320/kn.png" },
    { land: "St. Lucia", hauptstadt: "Castries", flag: "https://flagcdn.com/w320/lc.png" },
    { land: "St. Vincent und die Grenadinen", hauptstadt: "Kingstown", flag: "https://flagcdn.com/w320/vc.png" },
    { land: "Salomonen", hauptstadt: "Honiara", flag: "https://flagcdn.com/w320/sb.png" },
    { land: "Sambia", hauptstadt: "Lusaka", flag: "https://flagcdn.com/w320/zm.png" },
    { land: "Samoa", hauptstadt: "Apia", flag: "https://flagcdn.com/w320/ws.png" },
    { land: "San Marino", hauptstadt: "San Marino", flag: "https://flagcdn.com/w320/sm.png" },
    { land: "São Tomé und Príncipe", hauptstadt: "São Tomé", flag: "https://flagcdn.com/w320/st.png" },
    { land: "Saudi-Arabien", hauptstadt: "Riad", flag: "https://flagcdn.com/w320/sa.png" },
    { land: "Schweden", hauptstadt: "Stockholm", flag: "https://flagcdn.com/w320/se.png" },
    { land: "Schweiz", hauptstadt: "Bern", flag: "https://flagcdn.com/w320/ch.png" },
    { land: "Senegal", hauptstadt: "Dakar", flag: "https://flagcdn.com/w320/sn.png" },
    { land: "Serbien", hauptstadt: "Belgrad", flag: "https://flagcdn.com/w320/rs.png" },
    { land: "Seychellen", hauptstadt: "Victoria", flag: "https://flagcdn.com/w320/sc.png" },
    { land: "Sierra Leone", hauptstadt: "Freetown", flag: "https://flagcdn.com/w320/sl.png" },
    { land: "Simbabwe", hauptstadt: "Harare", flag: "https://flagcdn.com/w320/zw.png" },
    { land: "Singapur", hauptstadt: "Singapur", flag: "https://flagcdn.com/w320/sg.png" },
    { land: "Slowakei", hauptstadt: "Bratislava", flag: "https://flagcdn.com/w320/sk.png" },
    { land: "Slowenien", hauptstadt: "Ljubljana", flag: "https://flagcdn.com/w320/si.png" },
    { land: "Somalia", hauptstadt: "Mogadischu", flag: "https://flagcdn.com/w320/so.png" },
    { land: "Spanien", hauptstadt: "Madrid", flag: "https://flagcdn.com/w320/es.png" },
    { land: "Sri Lanka", hauptstadt: "Sri Jayawardenepura Kotte", flag: "https://flagcdn.com/w320/lk.png" },
    { land: "Südafrika", hauptstadt: ["Pretoria", "Kapstadt", "Bloemfontein"], flag: "https://flagcdn.com/w320/za.png" },
    { land: "Sudan", hauptstadt: "Khartum", flag: "https://flagcdn.com/w320/sd.png" },
    { land: "Südsudan", hauptstadt: "Juba", flag: "https://flagcdn.com/w320/ss.png" },
    { land: "Südkorea", hauptstadt: "Seoul", flag: "https://flagcdn.com/w320/kr.png" },
    { land: "Suriname", hauptstadt: "Paramaribo", flag: "https://flagcdn.com/w320/sr.png" },
    { land: "Syrien", hauptstadt: "Damaskus", flag: "https://flagcdn.com/w320/sy.png" },

    { land: "Tadschikistan", hauptstadt: "Duschanbe", flag: "https://flagcdn.com/w320/tj.png" },
    { land: "Tansania", hauptstadt: ["Dodoma", "Daressalaam"], flag: "https://flagcdn.com/w320/tz.png" },
    { land: "Thailand", hauptstadt: "Bangkok", flag: "https://flagcdn.com/w320/th.png" },
    { land: "Togo", hauptstadt: "Lomé", flag: "https://flagcdn.com/w320/tg.png" },
    { land: "Tonga", hauptstadt: "Nukuʻalofa", flag: "https://flagcdn.com/w320/to.png" },
    { land: "Trinidad und Tobago", hauptstadt: "Port of Spain", flag: "https://flagcdn.com/w320/tt.png" },
    { land: "Tschad", hauptstadt: "N’Djamena", flag: "https://flagcdn.com/w320/td.png" },
    { land: "Tschechien", hauptstadt: "Prag", flag: "https://flagcdn.com/w320/cz.png" },
    { land: "Tunesien", hauptstadt: "Tunis", flag: "https://flagcdn.com/w320/tn.png" },
    { land: "Türkei", hauptstadt: "Ankara", flag: "https://flagcdn.com/w320/tr.png" },
    { land: "Turkmenistan", hauptstadt: "Aschgabat", flag: "https://flagcdn.com/w320/tm.png" },
    { land: "Tuvalu", hauptstadt: "Funafuti", flag: "https://flagcdn.com/w320/tv.png" },

    { land: "Uganda", hauptstadt: "Kampala", flag: "https://flagcdn.com/w320/ug.png" },
    { land: "Ukraine", hauptstadt: "Kiew", flag: "https://flagcdn.com/w320/ua.png" },
    { land: "Ungarn", hauptstadt: "Budapest", flag: "https://flagcdn.com/w320/hu.png" },
    { land: "Uruguay", hauptstadt: "Montevideo", flag: "https://flagcdn.com/w320/uy.png" },
    { land: "Usbekistan", hauptstadt: "Taschkent", flag: "https://flagcdn.com/w320/uz.png" },

    { land: "Vanuatu", hauptstadt: "Port Vila", flag: "https://flagcdn.com/w320/vu.png" },
    { land: "Vatikanstadt", hauptstadt: "Vatikanstadt", flag: "https://flagcdn.com/w320/va.png" },
    { land: "Venezuela", hauptstadt: "Caracas", flag: "https://flagcdn.com/w320/ve.png" },
    { land: "Vereinigte Arabische Emirate", hauptstadt: "Abu Dhabi", flag: "https://flagcdn.com/w320/ae.png" },
    { land: "Vereinigte Staaten", hauptstadt: "Washington, D.C.", flag: "https://flagcdn.com/w320/us.png" },
    { land: "Vereinigtes Königreich", hauptstadt: "London", flag: "https://flagcdn.com/w320/gb.png" },
    { land: "Vietnam", hauptstadt: "Hanoi", flag: "https://flagcdn.com/w320/vn.png" },

    { land: "Zentralafrikanische Republik", hauptstadt: "Bangui", flag: "https://flagcdn.com/w320/cf.png" },
    { land: "Zypern", hauptstadt: "Nikosia", flag: "https://flagcdn.com/w320/cy.png" }
];

let current;
let score = 0;
let answered = false;

function nextQuestion() {
    current = countries[Math.floor(Math.random() * countries.length)];

    document.getElementById("country").innerText = current.land;

    // 👉 NEU: Flagge setzen
    document.getElementById("flag").src = current.flag;

    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";

    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("checkBtn").style.display = "block";

    answered = false;
}

function checkAnswer() {

    if (answered) return;

    const user = document.getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    let correctAnswers = current.hauptstadt;

    // Falls nur eine Hauptstadt existiert
    if (!Array.isArray(correctAnswers)) {
        correctAnswers = [correctAnswers];
    }

    const isCorrect = correctAnswers.some(
        city => city.toLowerCase() === user
    );

    if (isCorrect) {
        score++;
        document.getElementById("result").innerText =
            "✅ Richtig!";
    } else {
        document.getElementById("result").innerText =
            "❌ Richtig wäre: " + correctAnswers.join(", ");
    }

    document.getElementById("score").innerText = score;

    answered = true;

    document.getElementById("checkBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "block";
}
function checkAnswer() {
    if (answered) return;

    const user = document.getElementById("answer").value.trim().toLowerCase();
    const correct = current.hauptstadt.toLowerCase();

    if (user === correct) {
        document.getElementById("result").innerText = "✅ Richtig!";
        score++;
    } else {
        document.getElementById("result").innerText =
            "❌ Falsch! Richtig: " + current.hauptstadt;
    }

    document.getElementById("score").innerText = score;

    answered = true;

    // Buttons umschalten
    document.getElementById("checkBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "block";
}

nextQuestion();