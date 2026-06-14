const countries = [
    { land: "Afghanistan", hauptstadt: "Kabul", flag: "https://flagcdn.com/w320/af.png", kontinent: "AsienOzeanien" },
    { land: "Ägypten", hauptstadt: "Kairo", flag: "https://flagcdn.com/w320/eg.png", kontinent: "Afrika" },
    { land: "Albanien", hauptstadt: "Tirana", flag: "https://flagcdn.com/w320/al.png", kontinent: "Europa" },
    { land: "Algerien", hauptstadt: "Algier", flag: "https://flagcdn.com/w320/dz.png", kontinent: "Afrika" },
    { land: "Andorra", hauptstadt: "Andorra la Vella", flag: "https://flagcdn.com/w320/ad.png", kontinent: "Europa" },
    { land: "Angola", hauptstadt: "Luanda", flag: "https://flagcdn.com/w320/ao.png", kontinent: "Afrika" },
    { land: "Antigua und Barbuda", hauptstadt: "Saint John’s", flag: "https://flagcdn.com/w320/ag.png", kontinent: "Amerika" },
    { land: "Äquatorialguinea", hauptstadt: ["Malabo", "Ciudad de la Paz"], flag: "https://flagcdn.com/w320/gq.png", kontinent: "Afrika" },
    { land: "Argentinien", hauptstadt: "Buenos Aires", flag: "https://flagcdn.com/w320/ar.png", kontinent: "Amerika" },
    { land: "Armenien", hauptstadt: "Jerewan", flag: "https://flagcdn.com/w320/am.png", kontinent: "AsienOzeanien" },
    { land: "Aserbaidschan", hauptstadt: "Baku", flag: "https://flagcdn.com/w320/az.png", kontinent: "AsienOzeanien" },
    { land: "Äthiopien", hauptstadt: "Addis Abeba", flag: "https://flagcdn.com/w320/et.png", kontinent: "Afrika" },
    { land: "Australien", hauptstadt: "Canberra", flag: "https://flagcdn.com/w320/au.png", kontinent: "AsienOzeanien" },

    { land: "Bahamas", hauptstadt: "Nassau", flag: "https://flagcdn.com/w320/bs.png", kontinent: "Amerika" },
    { land: "Bahrain", hauptstadt: "Manama", flag: "https://flagcdn.com/w320/bh.png", kontinent: "AsienOzeanien" },
    { land: "Bangladesch", hauptstadt: "Dhaka", flag: "https://flagcdn.com/w320/bd.png", kontinent: "AsienOzeanien" },
    { land: "Barbados", hauptstadt: "Bridgetown", flag: "https://flagcdn.com/w320/bb.png", kontinent: "Amerika" },
    { land: "Belarus", hauptstadt: "Minsk", flag: "https://flagcdn.com/w320/by.png", kontinent: "Europa" },
    { land: "Belgien", hauptstadt: "Brüssel", flag: "https://flagcdn.com/w320/be.png", kontinent: "Europa" },
    { land: "Belize", hauptstadt: "Belmopan", flag: "https://flagcdn.com/w320/bz.png", kontinent: "Amerika" },
    { land: "Benin", hauptstadt: ["Porto-Novo", "Cotonou"], flag: "https://flagcdn.com/w320/bj.png", kontinent: "Afrika" },
    { land: "Bhutan", hauptstadt: "Thimphu", flag: "https://flagcdn.com/w320/bt.png", kontinent: "AsienOzeanien" },
    { land: "Bolivien", hauptstadt: ["Sucre", "La Paz"], flag: "https://flagcdn.com/w320/bo.png", kontinent: "Amerika" },
    { land: "Bosnien und Herzegowina", hauptstadt: "Sarajevo", flag: "https://flagcdn.com/w320/ba.png", kontinent: "Europa" },
    { land: "Botswana", hauptstadt: "Gaborone", flag: "https://flagcdn.com/w320/bw.png", kontinent: "Afrika" },
    { land: "Brasilien", hauptstadt: "Brasília", flag: "https://flagcdn.com/w320/br.png", kontinent: "Amerika" },
    { land: "Brunei", hauptstadt: "Bandar Seri Begawan", flag: "https://flagcdn.com/w320/bn.png", kontinent: "AsienOzeanien" },
    { land: "Bulgarien", hauptstadt: "Sofia", flag: "https://flagcdn.com/w320/bg.png", kontinent: "Europa" },
    { land: "Burkina Faso", hauptstadt: "Ouagadougou", flag: "https://flagcdn.com/w320/bf.png", kontinent: "Afrika" },
    { land: "Burundi", hauptstadt: "Gitega", flag: "https://flagcdn.com/w320/bi.png", kontinent: "Afrika" },

    { land: "Chile", hauptstadt: "Santiago", flag: "https://flagcdn.com/w320/cl.png", kontinent: "Amerika" },
    { land: "China", hauptstadt: "Peking", flag: "https://flagcdn.com/w320/cn.png", kontinent: "AsienOzeanien" },
    { land: "Costa Rica", hauptstadt: "San José", flag: "https://flagcdn.com/w320/cr.png", kontinent: "Amerika" },

    { land: "Dänemark", hauptstadt: "Kopenhagen", flag: "https://flagcdn.com/w320/dk.png", kontinent: "Europa" },
    { land: "Deutschland", hauptstadt: "Berlin", flag: "https://flagcdn.com/w320/de.png", kontinent: "Europa" },
    { land: "Dominica", hauptstadt: "Roseau", flag: "https://flagcdn.com/w320/dm.png", kontinent: "Amerika" },
    { land: "Dominikanische Republik", hauptstadt: "Santo Domingo", flag: "https://flagcdn.com/w320/do.png", kontinent: "Amerika" },
    { land: "Dschibuti", hauptstadt: "Dschibuti", flag: "https://flagcdn.com/w320/dj.png", kontinent: "Afrika" },

    { land: "Ecuador", hauptstadt: "Quito", flag: "https://flagcdn.com/w320/ec.png", kontinent: "Amerika" },
    { land: "El Salvador", hauptstadt: "San Salvador", flag: "https://flagcdn.com/w320/sv.png", kontinent: "Amerika" },
    { land: "Elfenbeinküste", hauptstadt: ["Yamoussoukro", "Abidjan"], flag: "https://flagcdn.com/w320/ci.png", kontinent: "Afrika" },
    { land: "Eritrea", hauptstadt: "Asmara", flag: "https://flagcdn.com/w320/er.png", kontinent: "Afrika" },
    { land: "Estland", hauptstadt: "Tallinn", flag: "https://flagcdn.com/w320/ee.png", kontinent: "Europa" },
    { land: "Eswatini", hauptstadt: ["Mbabane", " Lobamba"], flag: "https://flagcdn.com/w320/sz.png", kontinent: "Afrika" },

    { land: "Fidschi", hauptstadt: "Suva", flag: "https://flagcdn.com/w320/fj.png", kontinent: "AsienOzeanien" },
    { land: "Finnland", hauptstadt: "Helsinki", flag: "https://flagcdn.com/w320/fi.png", kontinent: "Europa" },
    { land: "Frankreich", hauptstadt: "Paris", flag: "https://flagcdn.com/w320/fr.png", kontinent: "Europa" },

    { land: "Gabun", hauptstadt: "Libreville", flag: "https://flagcdn.com/w320/ga.png", kontinent: "Afrika" },
    { land: "Gambia", hauptstadt: "Banjul", flag: "https://flagcdn.com/w320/gm.png", kontinent: "Afrika" },
    { land: "Georgien", hauptstadt: "Tiflis", flag: "https://flagcdn.com/w320/ge.png", kontinent: "AsienOzeanien" },
    { land: "Ghana", hauptstadt: "Accra", flag: "https://flagcdn.com/w320/gh.png", kontinent: "Afrika" },
    { land: "Griechenland", hauptstadt: "Athen", flag: "https://flagcdn.com/w320/gr.png", kontinent: "Europa" },
    { land: "Guatemala", hauptstadt: "Guatemala-Stadt", flag: "https://flagcdn.com/w320/gt.png", kontinent: "Amerika" },
    { land: "Guinea", hauptstadt: "Conakry", flag: "https://flagcdn.com/w320/gn.png", kontinent: "Afrika" },
    { land: "Guyana", hauptstadt: "Georgetown", flag: "https://flagcdn.com/w320/gy.png", kontinent: "Amerika" },

    { land: "Haiti", hauptstadt: "Port-au-Prince", flag: "https://flagcdn.com/w320/ht.png", kontinent: "Amerika" },
    { land: "Honduras", hauptstadt: "Tegucigalpa", flag: "https://flagcdn.com/w320/hn.png", kontinent: "Amerika" },

    { land: "Indien", hauptstadt: "Neu-Delhi", flag: "https://flagcdn.com/w320/in.png", kontinent: "AsienOzeanien" },
    { land: "Indonesien", hauptstadt: "Jakarta", flag: "https://flagcdn.com/w320/id.png", kontinent: "AsienOzeanien" },
    { land: "Irak", hauptstadt: "Bagdad", flag: "https://flagcdn.com/w320/iq.png", kontinent: "AsienOzeanien" },
    { land: "Iran", hauptstadt: "Teheran", flag: "https://flagcdn.com/w320/ir.png", kontinent: "AsienOzeanien" },
    { land: "Irland", hauptstadt: "Dublin", flag: "https://flagcdn.com/w320/ie.png", kontinent: "Europa" },
    { land: "Island", hauptstadt: "Reykjavík", flag: "https://flagcdn.com/w320/is.png", kontinent: "Europa" },
    { land: "Israel", hauptstadt: "Jerusalem", flag: "https://flagcdn.com/w320/il.png", kontinent: "AsienOzeanien" },
    { land: "Italien", hauptstadt: "Rom", flag: "https://flagcdn.com/w320/it.png", kontinent: "Europa" },

    { land: "Jamaika", hauptstadt: "Kingston", flag: "https://flagcdn.com/w320/jm.png", kontinent: "Amerika" },
    { land: "Japan", hauptstadt: "Tokio", flag: "https://flagcdn.com/w320/jp.png", kontinent: "AsienOzeanien" },
    { land: "Jemen", hauptstadt: "Sanaa", flag: "https://flagcdn.com/w320/ye.png", kontinent: "AsienOzeanien" },
    { land: "Jordanien", hauptstadt: "Amman", flag: "https://flagcdn.com/w320/jo.png", kontinent: "AsienOzeanien" },

    { land: "Kambodscha", hauptstadt: "Phnom Penh", flag: "https://flagcdn.com/w320/kh.png", kontinent: "AsienOzeanien" },
    { land: "Kamerun", hauptstadt: "Yaoundé", flag: "https://flagcdn.com/w320/cm.png", kontinent: "Afrika" },
    { land: "Kanada", hauptstadt: "Ottawa", flag: "https://flagcdn.com/w320/ca.png", kontinent: "Amerika" },
    { land: "Kap Verde", hauptstadt: "Praia", flag: "https://flagcdn.com/w320/cv.png", kontinent: "Afrika" },
    { land: "Kasachstan", hauptstadt: "Astana", flag: "https://flagcdn.com/w320/kz.png", kontinent: "AsienOzeanien" },
    { land: "Katar", hauptstadt: "Doha", flag: "https://flagcdn.com/w320/qa.png", kontinent: "AsienOzeanien" },
    { land: "Kenia", hauptstadt: "Nairobi", flag: "https://flagcdn.com/w320/ke.png", kontinent: "Afrika" },
    { land: "Kirgisistan", hauptstadt: "Bischkek", flag: "https://flagcdn.com/w320/kg.png", kontinent: "AsienOzeanien" },
    { land: "Kiribati", hauptstadt: "South Tarawa", flag: "https://flagcdn.com/w320/ki.png", kontinent: "AsienOzeanien" },
    { land: "Kolumbien", hauptstadt: "Bogotá", flag: "https://flagcdn.com/w320/co.png", kontinent: "Amerika" },
    { land: "Komoren", hauptstadt: "Moroni", flag: "https://flagcdn.com/w320/km.png", kontinent: "Afrika" },
    { land: "Kongo(Demokratische Republik)", hauptstadt: "Kinshasa", flag: "https://flagcdn.com/w320/cd.png", kontinent: "Afrika" },
    { land: "Kongo(Republik)", hauptstadt: "Brazzaville", flag: "https://flagcdn.com/w320/cg.png", kontinent: "Afrika" },
    { land: "Kroatien", hauptstadt: "Zagreb", flag: "https://flagcdn.com/w320/hr.png", kontinent: "Europa" },
    { land: "Kuba", hauptstadt: "Havanna", flag: "https://flagcdn.com/w320/cu.png", kontinent: "Amerika" },
    { land: "Kuwait", hauptstadt: "Kuwait-Stadt", flag: "https://flagcdn.com/w320/kw.png", kontinent: "AsienOzeanien" },

    { land: "Laos", hauptstadt: "Vientiane", flag: "https://flagcdn.com/w320/la.png", kontinent: "AsienOzeanien" },
    { land: "Lesotho", hauptstadt: "Maseru", flag: "https://flagcdn.com/w320/ls.png", kontinent: "Afrika" },
    { land: "Lettland", hauptstadt: "Riga", flag: "https://flagcdn.com/w320/lv.png", kontinent: "Europa" },
    { land: "Libanon", hauptstadt: "Beirut", flag: "https://flagcdn.com/w320/lb.png", kontinent: "AsienOzeanien" },
    { land: "Liberia", hauptstadt: "Monrovia", flag: "https://flagcdn.com/w320/lr.png", kontinent: "Afrika" },
    { land: "Libyen", hauptstadt: "Tripolis", flag: "https://flagcdn.com/w320/ly.png", kontinent: "Afrika" },
    { land: "Liechtenstein", hauptstadt: "Vaduz", flag: "https://flagcdn.com/w320/li.png", kontinent: "Europa" },
    { land: "Litauen", hauptstadt: "Vilnius", flag: "https://flagcdn.com/w320/lt.png", kontinent: "Europa" },
    { land: "Luxemburg", hauptstadt: "Luxemburg", flag: "https://flagcdn.com/w320/lu.png", kontinent: "Europa" },

    { land: "Madagaskar", hauptstadt: "Antananarivo", flag: "https://flagcdn.com/w320/mg.png", kontinent: "Afrika" },
    { land: "Malawi", hauptstadt: "Lilongwe", flag: "https://flagcdn.com/w320/mw.png", kontinent: "Afrika" },
    { land: "Malaysia", hauptstadt: ["Kuala Lumpur", "Putrajaya"], flag: "https://flagcdn.com/w320/my.png", kontinent: "AsienOzeanien" },
    { land: "Malediven", hauptstadt: "Malé", flag: "https://flagcdn.com/w320/mv.png", kontinent: "AsienOzeanien" },
    { land: "Mali", hauptstadt: "Bamako", flag: "https://flagcdn.com/w320/ml.png", kontinent: "Afrika" },
    { land: "Malta", hauptstadt: "Valletta", flag: "https://flagcdn.com/w320/mt.png", kontinent: "Europa" },
    { land: "Marokko", hauptstadt: "Rabat", flag: "https://flagcdn.com/w320/ma.png", kontinent: "Afrika" },
    { land: "Marshallinseln", hauptstadt: "Majuro", flag: "https://flagcdn.com/w320/mh.png", kontinent: "AsienOzeanien" },
    { land: "Mauretanien", hauptstadt: "Nouakchott", flag: "https://flagcdn.com/w320/mr.png", kontinent: "Afrika" },
    { land: "Mauritius", hauptstadt: "Port Louis", flag: "https://flagcdn.com/w320/mu.png", kontinent: "Afrika" },
    { land: "Mexiko", hauptstadt: "Mexiko-Stadt", flag: "https://flagcdn.com/w320/mx.png", kontinent: "Amerika" },
    { land: "Mikronesien", hauptstadt: "Palikir", flag: "https://flagcdn.com/w320/fm.png", kontinent: "AsienOzeanien" },
    { land: "Moldau", hauptstadt: "Chișinău", flag: "https://flagcdn.com/w320/md.png", kontinent: "Europa" },
    { land: "Monaco", hauptstadt: "Monaco", flag: "https://flagcdn.com/w320/mc.png", kontinent: "Europa" },
    { land: "Mongolei", hauptstadt: "Ulaanbaatar", flag: "https://flagcdn.com/w320/mn.png", kontinent: "AsienOzeanien" },
    { land: "Montenegro", hauptstadt: "Podgorica", flag: "https://flagcdn.com/w320/me.png", kontinent: "Europa" },
    { land: "Mosambik", hauptstadt: "Maputo", flag: "https://flagcdn.com/w320/mz.png", kontinent: "Afrika" },
    { land: "Myanmar", hauptstadt: "Naypyidaw", flag: "https://flagcdn.com/w320/mm.png", kontinent: "AsienOzeanien" },

    { land: "Namibia", hauptstadt: "Windhoek", flag: "https://flagcdn.com/w320/na.png", kontinent: "Afrika" },
    { land: "Nauru", hauptstadt: "Yaren", flag: "https://flagcdn.com/w320/nr.png", kontinent: "AsienOzeanien" },
    { land: "Nepal", hauptstadt: "Kathmandu", flag: "https://flagcdn.com/w320/np.png", kontinent: "AsienOzeanien" },
    { land: "Neuseeland", hauptstadt: "Wellington", flag: "https://flagcdn.com/w320/nz.png", kontinent: "AsienOzeanien" },
    { land: "Nicaragua", hauptstadt: "Managua", flag: "https://flagcdn.com/w320/ni.png", kontinent: "Amerika" },
    { land: "Niederlande", hauptstadt: ["Amsterdam", "Den Haag"], flag: "https://flagcdn.com/w320/nl.png", kontinent: "Europa" },
    { land: "Niger", hauptstadt: "Niamey", flag: "https://flagcdn.com/w320/ne.png", kontinent: "Afrika" },
    { land: "Nigeria", hauptstadt: "Abuja", flag: "https://flagcdn.com/w320/ng.png", kontinent: "Afrika" },
    { land: "Nordkorea", hauptstadt: "Pjöngjang", flag: "https://flagcdn.com/w320/kp.png", kontinent: "AsienOzeanien" },
    { land: "Nordmazedonien", hauptstadt: "Skopje", flag: "https://flagcdn.com/w320/mk.png", kontinent: "Europa" },
    { land: "Norwegen", hauptstadt: "Oslo", flag: "https://flagcdn.com/w320/no.png", kontinent: "Europa" },

    { land: "Oman", hauptstadt: "Maskat", flag: "https://flagcdn.com/w320/om.png", kontinent: "AsienOzeanien" },
    { land: "Österreich", hauptstadt: "Wien", flag: "https://flagcdn.com/w320/at.png", kontinent: "Europa" },
    { land: "Osttimor", hauptstadt: "Dili", flag: "https://flagcdn.com/w320/tl.png", kontinent: "AsienOzeanien" },

    { land: "Pakistan", hauptstadt: "Islamabad", flag: "https://flagcdn.com/w320/pk.png", kontinent: "AsienOzeanien" },
    { land: "Palästina", hauptstadt: ["Ramallah", "Ostjerusalem"], flag: "https://flagcdn.com/w320/ps.png", kontinent: "AsienOzeanien" },
    { land: "Palau", hauptstadt: "Ngerulmud", flag: "https://flagcdn.com/w320/pw.png", kontinent: "AsienOzeanien" },
    { land: "Panama", hauptstadt: "Panama-Stadt", flag: "https://flagcdn.com/w320/pa.png", kontinent: "Amerika" },
    { land: "Papua-Neuguinea", hauptstadt: "Port Moresby", flag: "https://flagcdn.com/w320/pg.png", kontinent: "AsienOzeanien" },
    { land: "Paraguay", hauptstadt: "Asunción", flag: "https://flagcdn.com/w320/py.png", kontinent: "Amerika" },
    { land: "Peru", hauptstadt: "Lima", flag: "https://flagcdn.com/w320/pe.png", kontinent: "Amerika" },
    { land: "Philippinen", hauptstadt: "Manila", flag: "https://flagcdn.com/w320/ph.png", kontinent: "AsienOzeanien" },
    { land: "Polen", hauptstadt: "Warschau", flag: "https://flagcdn.com/w320/pl.png", kontinent: "Europa" },
    { land: "Portugal", hauptstadt: "Lissabon", flag: "https://flagcdn.com/w320/pt.png", kontinent: "Europa" },

    { land: "Ruanda", hauptstadt: "Kigali", flag: "https://flagcdn.com/w320/rw.png", kontinent: "Afrika" },
    { land: "Rumänien", hauptstadt: "Bukarest", flag: "https://flagcdn.com/w320/ro.png", kontinent: "Europa" },
    { land: "Russland", hauptstadt: "Moskau", flag: "https://flagcdn.com/w320/ru.png", kontinent: "AsienOzeanien" },

    { land: "St. Kitts und Nevis", hauptstadt: "Basseterre", flag: "https://flagcdn.com/w320/kn.png", kontinent: "Amerika" },
    { land: "St. Lucia", hauptstadt: "Castries", flag: "https://flagcdn.com/w320/lc.png", kontinent: "Amerika" },
    { land: "St. Vincent und die Grenadinen", hauptstadt: "Kingstown", flag: "https://flagcdn.com/w320/vc.png", kontinent: "Amerika" },
    { land: "Salomonen", hauptstadt: "Honiara", flag: "https://flagcdn.com/w320/sb.png", kontinent: "AsienOzeanien" },
    { land: "Sambia", hauptstadt: "Lusaka", flag: "https://flagcdn.com/w320/zm.png", kontinent: "Afrika" },
    { land: "Samoa", hauptstadt: "Apia", flag: "https://flagcdn.com/w320/ws.png", kontinent: "AsienOzeanien" },
    { land: "San Marino", hauptstadt: "San Marino", flag: "https://flagcdn.com/w320/sm.png", kontinent: "Europa" },
    { land: "São Tomé und Príncipe", hauptstadt: "São Tomé", flag: "https://flagcdn.com/w320/st.png", kontinent: "Afrika" },
    { land: "Saudi-Arabien", hauptstadt: "Riad", flag: "https://flagcdn.com/w320/sa.png", kontinent: "AsienOzeanien" },
    { land: "Schweden", hauptstadt: "Stockholm", flag: "https://flagcdn.com/w320/se.png", kontinent: "Europa" },
    { land: "Schweiz", hauptstadt: "Bern", flag: "https://flagcdn.com/w320/ch.png", kontinent: "Europa" },
    { land: "Senegal", hauptstadt: "Dakar", flag: "https://flagcdn.com/w320/sn.png", kontinent: "Afrika" },
    { land: "Serbien", hauptstadt: "Belgrad", flag: "https://flagcdn.com/w320/rs.png", kontinent: "Europa" },
    { land: "Seychellen", hauptstadt: "Victoria", flag: "https://flagcdn.com/w320/sc.png", kontinent: "Afrika" },
    { land: "Sierra Leone", hauptstadt: "Freetown", flag: "https://flagcdn.com/w320/sl.png", kontinent: "Afrika" },
    { land: "Simbabwe", hauptstadt: "Harare", flag: "https://flagcdn.com/w320/zw.png", kontinent: "Afrika" },
    { land: "Singapur", hauptstadt: "Singapur", flag: "https://flagcdn.com/w320/sg.png", kontinent: "AsienOzeanien" },
    { land: "Slowakei", hauptstadt: "Bratislava", flag: "https://flagcdn.com/w320/sk.png", kontinent: "Europa" },
    { land: "Slowenien", hauptstadt: "Ljubljana", flag: "https://flagcdn.com/w320/si.png", kontinent: "Europa" },
    { land: "Somalia", hauptstadt: "Mogadischu", flag: "https://flagcdn.com/w320/so.png", kontinent: "Afrika" },
    { land: "Spanien", hauptstadt: "Madrid", flag: "https://flagcdn.com/w320/es.png", kontinent: "Europa" },
    { land: "Sri Lanka", hauptstadt: "Sri Jayawardenepura Kotte", flag: "https://flagcdn.com/w320/lk.png", kontinent: "AsienOzeanien" },
    { land: "Südafrika", hauptstadt: ["Pretoria", "Kapstadt", "Bloemfontein"], flag: "https://flagcdn.com/w320/za.png", kontinent: "Afrika" },
    { land: "Sudan", hauptstadt: "Khartum", flag: "https://flagcdn.com/w320/sd.png", kontinent: "Afrika" },
    { land: "Südsudan", hauptstadt: "Juba", flag: "https://flagcdn.com/w320/ss.png", kontinent: "Afrika" },
    { land: "Südkorea", hauptstadt: "Seoul", flag: "https://flagcdn.com/w320/kr.png", kontinent: "AsienOzeanien" },
    { land: "Suriname", hauptstadt: "Paramaribo", flag: "https://flagcdn.com/w320/sr.png", kontinent: "Amerika" },
    { land: "Syrien", hauptstadt: "Damaskus", flag: "https://flagcdn.com/w320/sy.png", kontinent: "AsienOzeanien" },

    { land: "Tadschikistan", hauptstadt: "Duschanbe", flag: "https://flagcdn.com/w320/tj.png", kontinent: "AsienOzeanien" },
    { land: "Tansania", hauptstadt: ["Dodoma", "Daressalaam"], flag: "https://flagcdn.com/w320/tz.png", kontinent: "Afrika" },
    { land: "Thailand", hauptstadt: "Bangkok", flag: "https://flagcdn.com/w320/th.png", kontinent: "AsienOzeanien" },
    { land: "Togo", hauptstadt: "Lomé", flag: "https://flagcdn.com/w320/tg.png", kontinent: "Afrika" },
    { land: "Tonga", hauptstadt: "Nukuʻalofa", flag: "https://flagcdn.com/w320/to.png", kontinent: "AsienOzeanien" },
    { land: "Trinidad und Tobago", hauptstadt: "Port of Spain", flag: "https://flagcdn.com/w320/tt.png", kontinent: "Amerika" },
    { land: "Tschad", hauptstadt: "N’Djamena", flag: "https://flagcdn.com/w320/td.png", kontinent: "Afrika" },
    { land: "Tschechien", hauptstadt: "Prag", flag: "https://flagcdn.com/w320/cz.png", kontinent: "Europa" },
    { land: "Tunesien", hauptstadt: "Tunis", flag: "https://flagcdn.com/w320/tn.png", kontinent: "Afrika" },
    { land: "Türkei", hauptstadt: "Ankara", flag: "https://flagcdn.com/w320/tr.png", kontinent: "AsienOzeanien" },
    { land: "Turkmenistan", hauptstadt: "Aschgabat", flag: "https://flagcdn.com/w320/tm.png", kontinent: "AsienOzeanien" },
    { land: "Tuvalu", hauptstadt: "Funafuti", flag: "https://flagcdn.com/w320/tv.png", kontinent: "AsienOzeanien" },

    { land: "Uganda", hauptstadt: "Kampala", flag: "https://flagcdn.com/w320/ug.png", kontinent: "Afrika" },
    { land: "Ukraine", hauptstadt: "Kiew", flag: "https://flagcdn.com/w320/ua.png", kontinent: "Europa" },
    { land: "Ungarn", hauptstadt: "Budapest", flag: "https://flagcdn.com/w320/hu.png", kontinent: "Europa" },
    { land: "Uruguay", hauptstadt: "Montevideo", flag: "https://flagcdn.com/w320/uy.png", kontinent: "Amerika" },
    { land: "Usbekistan", hauptstadt: "Taschkent", flag: "https://flagcdn.com/w320/uz.png", kontinent: "AsienOzeanien" },

    { land: "Vanuatu", hauptstadt: "Port Vila", flag: "https://flagcdn.com/w320/vu.png", kontinent: "AsienOzeanien" },
    { land: "Vatikanstadt", hauptstadt: "Vatikanstadt", flag: "https://flagcdn.com/w320/va.png", kontinent: "Europa" },
    { land: "Venezuela", hauptstadt: "Caracas", flag: "https://flagcdn.com/w320/ve.png", kontinent: "Amerika" },
    { land: "Vereinigte Arabische Emirate", hauptstadt: "Abu Dhabi", flag: "https://flagcdn.com/w320/ae.png", kontinent: "AsienOzeanien" },
    { land: "Vereinigte Staaten", hauptstadt: "Washington, D.C.", flag: "https://flagcdn.com/w320/us.png", kontinent: "Amerika" },
    { land: "Vereinigtes Königreich", hauptstadt: "London", flag: "https://flagcdn.com/w320/gb.png", kontinent: "Europa" },
    { land: "Vietnam", hauptstadt: "Hanoi", flag: "https://flagcdn.com/w320/vn.png", kontinent: "AsienOzeanien" },

    { land: "Zentralafrikanische Republik", hauptstadt: "Bangui", flag: "https://flagcdn.com/w320/cf.png", kontinent: "Afrika" },
    { land: "Zypern", hauptstadt: "Nikosia", flag: "https://flagcdn.com/w320/cy.png", kontinent: "Europa" }
];

let quizCountries = [];
let currentIndex = 0;
let current;
let score = 0;
let answered = false;
let gameMode = "hauptstadt";

function goBack() {
    document.getElementById("stepContinent").style.display = "none";
    document.getElementById("stepMode").style.display = "block";
}

function openMenu() {
    document.getElementById("overlay").style.display = "flex";
}


function selectContinent(continent) {

    let list = [];

    if (continent === "Welt") {
        list = countries;
    } else {
        list = countries.filter(c =>
            c.kontinent === continent
        );
    }

    if (!list || list.length === 0) {
        alert("Keine Länder gefunden!");
        return;
    }

    quizCountries = shuffle([...list]);
    currentIndex = 0;
    score = 0;
    document.getElementById("score").innerText = score;

    document.getElementById("overlay").style.display = "none";

    nextQuestion();
}


function nextQuestion() {

    if (currentIndex >= quizCountries.length) {
        currentIndex = 0;
        quizCountries = shuffle([...quizCountries]);
    }

    current = quizCountries[currentIndex];

    // RESET UI
    const result = document.getElementById("result");
    result.innerText = "";
    result.className = "";

    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("checkBtn").style.display = "block";

    document.getElementById("answer").value = "";

    const choicesBox = document.getElementById("choices");
    if (choicesBox) {
        choicesBox.innerHTML = "";
    }

    answered = false;

    // MODUS: Hauptstadt
    if (gameMode === "hauptstadt") {

        document.getElementById("flag").style.display = "block";
        document.getElementById("answer").style.display = "block";
        document.getElementById("choices").style.display = "none";

        document.getElementById("flag").src = current.flag;
        document.getElementById("country").innerText =
             current.land;

    }

    // MODUS: Flagge
    else if (gameMode === "flagge") {

        document.getElementById("flag").style.display = "block";
        document.getElementById("answer").style.display = "none";
        document.getElementById("checkBtn").style.display = "none";
        document.getElementById("choices").style.display = "block";
        document.getElementById("choices").innerHTML = "";

        document.getElementById("flag").src = current.flag;
        document.getElementById("country").innerText =
            "Zu welchem Land gehört diese Flagge?";

        generateChoices(current);
    }
}


function checkAnswer() {

    if (answered) return;

    const user = document.getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    let correct = current.hauptstadt;

    let isCorrect = false;

    // 🔥 mehrere Hauptstädte möglich
    if (Array.isArray(correct)) {

        isCorrect = correct.some(city =>
            city.toLowerCase() === user
        );

    } else {

        isCorrect = user === correct.toLowerCase();
    }

    if (isCorrect) {

        score++;
        const r1 = document.getElementById("result"); r1.innerText = "✅ Richtig!"; r1.className = "correct";

    } else {

        document.getElementById("result").innerText =
            "❌ Richtig: " + (Array.isArray(correct) ? correct.join(", ") : correct); document.getElementById("result").className = "wrong";
    }

    document.getElementById("score").innerText = score;

    answered = true;

    document.getElementById("checkBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline-block";
}

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function generateChoices(correctCountry) {

    const container = document.getElementById("choices");

    if (!container) return;

    let choices = [correctCountry.land];
    const possibleChoices = quizCountries.length >= 4 ? quizCountries : countries;

    while (choices.length < 4) {

        let random = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

        if (!choices.includes(random.land)) {
            choices.push(random.land);
        }
    }

    choices = shuffle(choices);

    container.innerHTML = "";

    choices.forEach(choice => {

        const btn = document.createElement("button");

        btn.className = "choiceBtn";
        btn.innerText = choice;

        btn.onclick = function () {
            checkChoice(choice);
        };

        container.appendChild(btn);
    });
}

function checkChoice(choice) {

    if (answered) return;

    answered = true;

    if (choice === current.land) {
        score++;
        const r1 = document.getElementById("result"); r1.innerText = "✅ Richtig!"; r1.className = "correct";
    } else {
        const r2 = document.getElementById("result"); r2.innerText = "❌ Richtig: " + current.land; r2.className = "wrong";
    }

    document.querySelectorAll(".choiceBtn").forEach(btn => {
        btn.disabled = true;

        if (btn.innerText === current.land) {
            btn.classList.add("correctChoice");
        } else if (btn.innerText === choice) {
            btn.classList.add("wrongChoice");
        }
    });

    document.getElementById("score").innerText = score;
    document.getElementById("nextBtn").style.display = "block";
}

function chooseMode(mode) {

    gameMode = mode;

    // Schritt 1 verstecken
    document.getElementById("stepMode").style.display = "none";

    // Schritt 2 anzeigen
    document.getElementById("stepContinent").style.display = "block";
}


function openMenu() {

    document.getElementById("overlay").style.display = "flex";

    // Reset Flow
    document.getElementById("stepMode").style.display = "block";
    document.getElementById("stepContinent").style.display = "none";
}

function next() {
    currentIndex++;
    nextQuestion();
}
