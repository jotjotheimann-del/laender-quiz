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
let current = null;
let currentQuestion = null;
let answered = false;

let selectedMode = "capitalCountryToCapital";
let selectedAnswerType = "choice";
let selectedContinent = "Welt";

let roundType = "normal";
let timeLimit = 60;
let timerInterval = null;
let timeLeft = 0;
let livesLeft = 5;
let correctInRound = 0;
let wrongInRound = 0;
let currentRun = 0;

const STAT_KEY = "geoMasterStatsV2";

const continentNames = {
    Europa: "Europa",
    Amerika: "Amerika",
    Afrika: "Afrika",
    AsienOzeanien: "Asien + Ozeanien"
};

const modeLabels = {
    capitalCountryToCapital: "Land → Hauptstadt",
    capitalCapitalToCountry: "Hauptstadt → Land",
    flagCountry: "Flagge → Land",
    countryFlag: "Land → Flagge",
    time: "Zeit-Challenge",
    lives: "Leben-Modus",
    weakness: "Schwächen üben"
};

const achievementDefinitions = [
    { id: "firstAnswer", title: "Erste Antwort", text: "Beantworte deine erste Frage", xp: 20, check: s => s.totalAnswered >= 1 },
    { id: "tenCorrect", title: "Warmgelaufen", text: "10 richtige Antworten", xp: 30, check: s => s.totalCorrect >= 10 },
    { id: "hundredCorrect", title: "Länder-Kenner", text: "100 richtige Antworten", xp: 80, check: s => s.totalCorrect >= 100 },
    { id: "fiveHundredCorrect", title: "Geografie-Profi", text: "500 richtige Antworten", xp: 200, check: s => s.totalCorrect >= 500 },
    { id: "fiftyCountries", title: "Weltreisender", text: "50 verschiedene Länder gut gelernt", xp: 120, check: s => getWellLearnedCountries(s).length >= 50 },
    { id: "allCountries", title: "Alle Länder gelernt", text: "Alle Länder deiner Liste gut gelernt", xp: 500, check: s => getWellLearnedCountries(s).length >= countries.length },
    { id: "europeMaster", title: "Europa-Meister", text: "Alle europäischen Länder gut gelernt", xp: 120, check: s => isContinentMaster(s, "Europa") },
    { id: "africaMaster", title: "Afrika-Meister", text: "Alle afrikanischen Länder gut gelernt", xp: 120, check: s => isContinentMaster(s, "Afrika") },
    { id: "americaMaster", title: "Amerika-Meister", text: "Alle amerikanischen Länder gut gelernt", xp: 120, check: s => isContinentMaster(s, "Amerika") },
    { id: "asiaMaster", title: "Asien/Ozeanien-Meister", text: "Alle Länder aus Asien + Ozeanien gut gelernt", xp: 120, check: s => isContinentMaster(s, "AsienOzeanien") },
    { id: "thirtyDayStreak", title: "30 Tage Streak", text: "Lerne 30 Tage in Folge", xp: 300, check: s => s.dailyStreak >= 30 }
];

function getEmptyStats() {
    return {
        xp: 0,
        level: 1,
        totalAnswered: 0,
        totalCorrect: 0,
        currentRun: 0,
        bestRun: 0,
        dailyStreak: 0,
        bestDailyStreak: 0,
        lastLearningDate: "",
        todayAnswered: 0,
        countryStats: {},
        modeStats: {},
        unlockedAchievements: [],
        dailyTasks: null,
        records: {
            time30: 0,
            time60: 0,
            time120: 0,
            lives: 0
        }
    };
}

function loadStats() {
    const saved = localStorage.getItem(STAT_KEY);

    if (!saved) return getEmptyStats();

    try {
        const parsed = JSON.parse(saved);
        return {
            ...getEmptyStats(),
            ...parsed,
            countryStats: parsed.countryStats || {},
            modeStats: parsed.modeStats || {},
            unlockedAchievements: parsed.unlockedAchievements || [],
            records: {
                ...getEmptyStats().records,
                ...(parsed.records || {})
            }
        };
    } catch (error) {
        return getEmptyStats();
    }
}

function saveStats(stats) {
    localStorage.setItem(STAT_KEY, JSON.stringify(stats));
}

function todayKey() {
    return new Date().toISOString().slice(0, 10);
}

function xpNeededForNextLevel(level) {
    return level * 100;
}

function calculateLevel(totalXp) {
    let level = 1;
    let xpLeft = totalXp;

    while (xpLeft >= xpNeededForNextLevel(level)) {
        xpLeft -= xpNeededForNextLevel(level);
        level++;
    }

    return level;
}

function getXpInCurrentLevel(totalXp, level) {
    let used = 0;

    for (let i = 1; i < level; i++) {
        used += xpNeededForNextLevel(i);
    }

    return totalXp - used;
}

function addXp(stats, amount, reason) {
    const oldLevel = stats.level;

    stats.xp += amount;
    stats.level = calculateLevel(stats.xp);

    if (reason) showToast("+" + amount + " XP · " + reason);

    if (stats.level > oldLevel) {
        showLevelUp(stats.level);
    }
}

function showLevelUp(level) {
    const overlay = document.getElementById("levelUpOverlay");
    const text = document.getElementById("levelUpText");

    if (!overlay) return;

    text.innerText = "Level " + level + " erreicht";
    overlay.style.display = "grid";

    setTimeout(() => {
        overlay.style.display = "none";
    }, 2200);
}

function showToast(text) {
    const stack = document.getElementById("toastStack");
    if (!stack) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = text;

    stack.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2600);
}

function normalizeAnswer(text) {
    return String(text)
        .trim()
        .toLowerCase()
        .replaceAll("ä", "ae")
        .replaceAll("ö", "oe")
        .replaceAll("ü", "ue")
        .replaceAll("ß", "ss")
        .replace(/[.,]/g, "")
        .replace(/\s+/g, " ");
}

function capitalText(country) {
    return Array.isArray(country.hauptstadt)
        ? country.hauptstadt.join(", ")
        : country.hauptstadt;
}

function capitalAnswers(country) {
    return Array.isArray(country.hauptstadt)
        ? country.hauptstadt
        : [country.hauptstadt];
}

function getCountryStats(stats, country) {
    if (!stats.countryStats[country.land]) {
        stats.countryStats[country.land] = {
            richtig: 0,
            falsch: 0
        };
    }

    return stats.countryStats[country.land];
}

function getLearningStatus(stats, country) {
    const item = stats.countryStats[country.land];

    if (!item || item.richtig + item.falsch === 0) {
        return "neu";
    }

    const total = item.richtig + item.falsch;
    const quote = item.richtig / total;

    if (total >= 3 && quote >= 0.8) return "gut";
    if (quote >= 0.5) return "mittel";
    return "schlecht";
}

function getWellLearnedCountries(stats) {
    return countries.filter(country => getLearningStatus(stats, country) === "gut");
}

function isContinentMaster(stats, continent) {
    const list = countries.filter(country => country.kontinent === continent);
    return list.length > 0 && list.every(country => getLearningStatus(stats, country) === "gut");
}

function getCountriesForContinent(continent) {
    if (continent === "Welt") return countries;
    return countries.filter(country => country.kontinent === continent);
}

function buildWeightedList(list) {
    const stats = loadStats();
    const weighted = [];

    list.forEach(country => {
        const status = getLearningStatus(stats, country);
        let weight = 2;

        if (status === "neu") weight = 4;
        if (status === "mittel") weight = 3;
        if (status === "schlecht") weight = 6;
        if (status === "gut") weight = 1;

        for (let i = 0; i < weight; i++) {
            weighted.push(country);
        }
    });

    return shuffle(weighted);
}

function recordAnswer(isCorrect, country, mode) {
    const stats = loadStats();
    const today = todayKey();
    const countryStats = getCountryStats(stats, country);

    if (!stats.modeStats[mode]) {
        stats.modeStats[mode] = { answered: 0, correct: 0 };
    }

    countryStats[isCorrect ? "richtig" : "falsch"]++;
    stats.totalAnswered++;
    stats.modeStats[mode].answered++;

    stats.todayAnswered = stats.lastLearningDate === today ? stats.todayAnswered + 1 : 1;
    stats.lastLearningDate = today;

    if (stats.todayAnswered >= 5) {
        updateDailyStreak(stats, today);
    }

    if (isCorrect) {
        stats.totalCorrect++;
        stats.modeStats[mode].correct++;
        stats.currentRun++;
        currentRun = stats.currentRun;
        stats.bestRun = Math.max(stats.bestRun, stats.currentRun);
        addXp(stats, 10, "Richtige Antwort");
    } else {
        stats.currentRun = 0;
        currentRun = 0;
    }

    updateDailyTasks(stats, {
        isCorrect,
        country,
        mode,
        continent: country.kontinent,
        run: stats.currentRun
    });

    checkAchievements(stats);
    saveStats(stats);
    renderAllStats();
}

function updateDailyStreak(stats, today) {
    if (stats.streakCountedDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toISOString().slice(0, 10);

    if (stats.streakCountedDate === yesterdayKey) {
        stats.dailyStreak++;
    } else if (stats.streakCountedDate !== today) {
        stats.dailyStreak = 1;
    }

    stats.streakCountedDate = today;
    stats.bestDailyStreak = Math.max(stats.bestDailyStreak, stats.dailyStreak);
}

function getDailyTasks(stats) {
    const today = todayKey();

    if (stats.dailyTasks && stats.dailyTasks.date === today) {
        return stats.dailyTasks;
    }

    const options = [
        { id: "correct10", title: "10 richtige Antworten", goal: 10, progress: 0, reward: 40, done: false, type: "correct" },
        { id: "flag5", title: "5 Flaggen-Fragen richtig", goal: 5, progress: 0, reward: 35, done: false, type: "flag" },
        { id: "africa5", title: "5 Afrika-Fragen richtig", goal: 5, progress: 0, reward: 35, done: false, type: "africa" },
        { id: "run10", title: "Schaffe eine 10er-Serie", goal: 10, progress: 0, reward: 50, done: false, type: "run" },
        { id: "answer15", title: "Beantworte 15 Fragen", goal: 15, progress: 0, reward: 30, done: false, type: "answered" }
    ];

    stats.dailyTasks = {
        date: today,
        bonusClaimed: false,
        tasks: shuffle([...options]).slice(0, 3)
    };

    saveStats(stats);
    return stats.dailyTasks;
}

function updateDailyTasks(stats, event) {
    const daily = getDailyTasks(stats);
    let completedNow = false;

    daily.tasks.forEach(task => {
        if (task.done) return;

        if (task.type === "answered") task.progress++;
        if (task.type === "correct" && event.isCorrect) task.progress++;
        if (task.type === "flag" && event.isCorrect && event.mode.includes("flag")) task.progress++;
        if (task.type === "africa" && event.isCorrect && event.continent === "Afrika") task.progress++;
        if (task.type === "run") task.progress = Math.max(task.progress, event.run);

        if (task.progress >= task.goal) {
            task.progress = task.goal;
            task.done = true;
            completedNow = true;
            addXp(stats, task.reward, "Tagesaufgabe geschafft");
        }
    });

    if (!daily.bonusClaimed && daily.tasks.every(task => task.done)) {
        daily.bonusClaimed = true;
        addXp(stats, 80, "Tagesbonus");
        showToast("🎁 Tagesbonus freigeschaltet");
    }

    if (completedNow) showToast("🎯 Tagesaufgabe erledigt");
}

function checkAchievements(stats) {
    achievementDefinitions.forEach(achievement => {
        if (stats.unlockedAchievements.includes(achievement.id)) return;

        if (achievement.check(stats)) {
            stats.unlockedAchievements.push(achievement.id);
            addXp(stats, achievement.xp, "Erfolg: " + achievement.title);
            showToast("🏆 Erfolg freigeschaltet: " + achievement.title);
        }
    });
}

function setView(viewId) {
    document.querySelectorAll(".view").forEach(view => {
        view.classList.remove("activeView");
    });

    document.getElementById(viewId).classList.add("activeView");
}

function showHome() {
    stopTimer();
    closeMenu();
    setView("homeView");
    renderAllStats();
}

function showProfile() {
    closeMenu();
    setView("profileView");
    renderAllStats();
}

function showLexicon() {
    closeMenu();
    setView("lexiconView");
    renderLexicon();
}

function openMenu() {
    stopTimer();
    document.getElementById("menuOverlay").style.display = "block";
    backToModeStep();
}

function closeMenu() {
    document.getElementById("menuOverlay").style.display = "none";
}

function showMenuStep(id) {
    document.querySelectorAll(".menuStep").forEach(step => {
        step.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

function backToModeStep() {
    showMenuStep("menuStepMode");
}

function backToAnswerStep() {
    if (roundType === "time") {
        showMenuStep("menuStepTime");
    } else {
        showMenuStep("menuStepAnswer");
    }
}

function chooseMode(mode) {
    selectedMode = mode;
    roundType = "normal";

    if (mode === "time") {
        roundType = "time";
        selectedMode = "flagCountry";
        selectedAnswerType = "choice";
        showMenuStep("menuStepTime");
        return;
    }

    if (mode === "lives") {
        roundType = "lives";
        selectedMode = "flagCountry";
        selectedAnswerType = "choice";
        showMenuStep("menuStepAnswer");
        return;
    }

    if (mode === "countryFlag") {
        selectedAnswerType = "choice";
        showMenuStep("menuStepContinent");
        return;
    }

    showMenuStep("menuStepAnswer");
}

function chooseAnswerType(type) {
    selectedAnswerType = type;
    showMenuStep("menuStepContinent");
}

function chooseTimeLimit(seconds) {
    timeLimit = seconds;
    showMenuStep("menuStepAnswer");
}

function selectContinent(continent) {
    selectedContinent = continent;

    const list = getCountriesForContinent(continent);

    if (list.length === 0) {
        alert("Keine Länder gefunden.");
        return;
    }

    quizCountries = buildWeightedList(list);
    currentIndex = 0;
    correctInRound = 0;
    wrongInRound = 0;
    answered = false;

    closeMenu();
    setView("quizView");

    if (roundType === "time") startTimeRound();
    if (roundType === "lives") startLivesRound();

    setupRoundUi();
    nextQuestion();
}

function setupRoundUi() {
    document.getElementById("lifeBar").style.display = roundType === "lives" ? "flex" : "none";
    document.getElementById("timerBar").style.display = roundType === "time" ? "block" : "none";

    if (roundType === "normal") {
        document.getElementById("modeLabel").innerText = modeLabels[selectedMode];
    }

    if (roundType === "time") {
        document.getElementById("modeLabel").innerText = "⏱️ Zeit-Challenge";
    }

    if (roundType === "lives") {
        document.getElementById("modeLabel").innerText = "❤️ Leben-Modus";
        renderLives();
    }
}

function startTimeRound() {
    timeLeft = timeLimit;
    updateTimerUi();

    stopTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUi();

        if (timeLeft <= 0) {
            finishRound();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerUi() {
    document.getElementById("timerText").innerText = timeLeft + "s";
    document.getElementById("timerFill").style.width = Math.max(0, (timeLeft / timeLimit) * 100) + "%";
}

function startLivesRound() {
    livesLeft = 5;
    renderLives();
}

function renderLives() {
    const lifeBar = document.getElementById("lifeBar");
    lifeBar.innerHTML = "";

    for (let i = 0; i < livesLeft; i++) {
        lifeBar.innerHTML += "❤️";
    }
}

function nextQuestion() {
    if (roundType === "time" && timeLeft <= 0) return;
    if (roundType === "lives" && livesLeft <= 0) return;

    if (currentIndex >= quizCountries.length) {
        currentIndex = 0;
        quizCountries = buildWeightedList(getCountriesForContinent(selectedContinent));
    }

    current = quizCountries[currentIndex];
    currentIndex++;

    answered = false;
    currentQuestion = createQuestion(current);

    renderQuestion(currentQuestion);
}

function createQuestion(country) {
    if (roundType === "time") {
        selectedMode = Math.random() > 0.5 ? "flagCountry" : "capitalCountryToCapital";
    }

    if (selectedMode === "capitalCountryToCapital") {
        return {
            prompt: "Welche Hauptstadt hat " + country.land + "?",
            image: country.flag,
            correctAnswers: capitalAnswers(country),
            choices: makeChoices(country, "capital"),
            answerMode: selectedAnswerType
        };
    }

    if (selectedMode === "capitalCapitalToCountry") {
        return {
            prompt: "Zu welchem Land gehört " + capitalText(country) + "?",
            image: "",
            correctAnswers: [country.land],
            choices: makeChoices(country, "country"),
            answerMode: selectedAnswerType
        };
    }

    if (selectedMode === "flagCountry") {
        return {
            prompt: "Zu welchem Land gehört diese Flagge?",
            image: country.flag,
            correctAnswers: [country.land],
            choices: makeChoices(country, "country"),
            answerMode: selectedAnswerType
        };
    }

    return {
        prompt: "Welche Flagge gehört zu " + country.land + "?",
        image: "",
        correctAnswers: [country.flag],
        choices: makeChoices(country, "flag"),
        answerMode: "choice"
    };
}

function renderQuestion(question) {
    const flag = document.getElementById("flag");
    const answer = document.getElementById("answer");
    const choices = document.getElementById("choices");
    const result = document.getElementById("result");

    document.getElementById("country").innerText = question.prompt;
    result.innerText = "";
    result.className = "";

    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("checkBtn").style.display = question.answerMode === "input" ? "block" : "none";

    answer.value = "";
    answer.style.display = question.answerMode === "input" ? "block" : "none";

    flag.src = question.image || "";
    flag.style.display = question.image ? "block" : "none";

    choices.innerHTML = "";
    choices.style.display = question.answerMode === "choice" ? "grid" : "none";

    if (question.answerMode === "choice") {
        question.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "choiceBtn";

            if (choice.type === "flag") {
                btn.innerHTML = `<img src="${choice.value}" alt="Flagge" style="width:70px;border-radius:10px;vertical-align:middle;margin-right:12px;">`;
            } else {
                btn.innerText = choice.label;
            }

            btn.onclick = () => checkChoice(choice);
            choices.appendChild(btn);
        });
    }
}

function makeChoices(correctCountry, type) {
    const pool = getCountriesForContinent(selectedContinent);
    const choices = [];

    if (type === "country") {
        choices.push({ label: correctCountry.land, value: correctCountry.land, type });
    }

    if (type === "capital") {
        choices.push({ label: capitalText(correctCountry), value: capitalText(correctCountry), type });
    }

    if (type === "flag") {
        choices.push({ label: correctCountry.land, value: correctCountry.flag, type });
    }

    while (choices.length < 4) {
        const random = pool[Math.floor(Math.random() * pool.length)];

        let value = random.land;
        let label = random.land;

        if (type === "capital") {
            value = capitalText(random);
            label = capitalText(random);
        }

        if (type === "flag") {
            value = random.flag;
            label = random.land;
        }

        if (!choices.some(choice => choice.value === value)) {
            choices.push({ label, value, type });
        }
    }

    return shuffle(choices);
}

function checkAnswer() {
    if (answered) return;

    const user = normalizeAnswer(document.getElementById("answer").value);
    const isCorrect = currentQuestion.correctAnswers.some(answer => normalizeAnswer(answer) === user);

    finishQuestion(isCorrect);
}

function checkChoice(choice) {
    if (answered) return;

    const isCorrect = currentQuestion.correctAnswers.some(answer => answer === choice.value || answer === choice.label);

    document.querySelectorAll(".choiceBtn").forEach(btn => {
        btn.disabled = true;

        const text = btn.innerText.trim();

        if (currentQuestion.correctAnswers.includes(text)) {
            btn.classList.add("correctChoice");
        } else if (text === choice.label) {
            btn.classList.add("wrongChoice");
        }

        if (choice.type === "flag" && btn.innerHTML.includes(current.flag)) {
            btn.classList.add("correctChoice");
        } else if (choice.type === "flag" && btn.innerHTML.includes(choice.value) && !isCorrect) {
            btn.classList.add("wrongChoice");
        }
    });

    finishQuestion(isCorrect);
}

function finishQuestion(isCorrect) {
    answered = true;

    if (isCorrect) {
        correctInRound++;
        document.getElementById("result").innerText = "✅ Richtig!";
        document.getElementById("result").className = "correct";
    } else {
        wrongInRound++;
        document.getElementById("result").innerText = "❌ Richtig: " + currentQuestion.correctAnswers[0];
        document.getElementById("result").className = "wrong";

        if (roundType === "lives") {
            livesLeft--;
            renderLives();
        }
    }

    recordAnswer(isCorrect, current, selectedMode);

    if (roundType === "time" && timeLeft > 0) {
        setTimeout(nextQuestion, 650);
        return;
    }

    if (roundType === "lives" && livesLeft <= 0) {
        setTimeout(finishRound, 900);
        return;
    }

    document.getElementById("checkBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "block";
}

function next() {
    nextQuestion();
}

function finishRound() {
    stopTimer();

    const score = correctInRound;
    const stats = loadStats();

    if (roundType === "time") {
        const key = "time" + timeLimit;
        stats.records[key] = Math.max(stats.records[key] || 0, score);
    }

    if (roundType === "lives") {
        stats.records.lives = Math.max(stats.records.lives || 0, score);
    }

    saveStats(stats);

    document.getElementById("roundResultTitle").innerText = "Runde beendet";
    document.getElementById("roundResultStats").innerHTML = `
        <article><span>Richtig</span><strong>${correctInRound}</strong></article>
        <article><span>Falsch</span><strong>${wrongInRound}</strong></article>
        <article><span>Punkte</span><strong>${score}</strong></article>
        <article><span>Rekord</span><strong>${getCurrentRecord(stats)}</strong></article>
    `;

    setView("resultView");
    renderAllStats();
}

function getCurrentRecord(stats) {
    if (roundType === "time") return stats.records["time" + timeLimit] || 0;
    if (roundType === "lives") return stats.records.lives || 0;
    return correctInRound;
}

function startWeaknessQuiz() {
    const stats = loadStats();

    const weaknessCountries = countries
        .filter(country => {
            const item = stats.countryStats[country.land];
            return item && item.falsch > 0;
        })
        .sort((a, b) => {
            const aStats = stats.countryStats[a.land];
            const bStats = stats.countryStats[b.land];
            return bStats.falsch - aStats.falsch;
        })
        .slice(0, 20);

    if (weaknessCountries.length === 0) {
        showToast("Du hast noch keine gespeicherten Schwächen.");
        return;
    }

    selectedMode = "flagCountry";
    selectedAnswerType = "choice";
    selectedContinent = "Welt";
    roundType = "normal";
    quizCountries = shuffle(weaknessCountries);
    currentIndex = 0;

    setView("quizView");
    setupRoundUi();
    nextQuestion();
}

function practiceCountry(countryName) {
    const country = countries.find(item => item.land === countryName);
    if (!country) return;

    selectedMode = "flagCountry";
    selectedAnswerType = "choice";
    selectedContinent = country.kontinent;
    roundType = "normal";
    quizCountries = [country];
    currentIndex = 0;

    setView("quizView");
    setupRoundUi();
    nextQuestion();
}

function renderAllStats() {
    const stats = loadStats();
    getDailyTasks(stats);
    saveStats(stats);

    renderHome(stats);
    renderProfile(stats);
    renderDailyTasks(stats);
    renderAchievements(stats);
    renderWeaknesses(stats);
}

function renderHome(stats) {
    const learned = getWellLearnedCountries(stats).length;

    setText("homeLevel", stats.level);
    setText("homeXp", stats.xp);
    setText("homeDailyStreak", stats.dailyStreak);
    setText("homeLearned", learned);

    const preview = document.getElementById("dailyPreviewList");
    if (!preview) return;

    preview.innerHTML = stats.dailyTasks.tasks.map(task => `
        <div class="dailyMiniTask">
            <strong>${task.done ? "✅" : "🎯"} ${task.title}</strong>
            <small>${task.progress}/${task.goal}</small>
        </div>
    `).join("");
}

function renderProfile(stats) {
    const accuracy = stats.totalAnswered === 0 ? 0 : Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
    const learned = getWellLearnedCountries(stats).length;
    const xpInLevel = getXpInCurrentLevel(stats.xp, stats.level);
    const needed = xpNeededForNextLevel(stats.level);
    const percent = Math.round((xpInLevel / needed) * 100);

    setText("playerLevel", stats.level);
    setText("profileLevel", stats.level);
    setText("profileXpText", stats.xp + " XP");
    setText("profileXpMissing", needed - xpInLevel + " XP bis Level " + (stats.level + 1));
    setText("xpMissing", needed - xpInLevel + " XP bis Level " + (stats.level + 1));
    setText("profileAnswered", stats.totalAnswered);
    setText("profileCorrect", stats.totalCorrect);
    setText("profileAccuracy", accuracy + "%");
    setText("profileLearned", learned);
    setText("profileCurrentRun", stats.currentRun);
    setText("profileDayStreak", stats.dailyStreak);
    setText("profileBestDayStreak", stats.bestDailyStreak);
    setText("profileAchievements", stats.unlockedAchievements.length);
    setText("score", stats.currentRun);

    setWidth("xpFill", percent);
    setWidth("profileXpFill", percent);

    const progressList = document.getElementById("continentProgressList");
    if (progressList) {
        progressList.innerHTML = Object.keys(continentNames).map(continent => {
            const list = countries.filter(country => country.kontinent === continent);
            const good = list.filter(country => getLearningStatus(stats, country) === "gut").length;
            const progress = list.length === 0 ? 0 : Math.round((good / list.length) * 100);

            return `
                <div class="progressRow">
                    <div class="progressTop">
                        <strong>${continentNames[continent]}</strong>
                        <span>${good}/${list.length}</span>
                    </div>
                    <div class="progressBar">
                        <div class="progressFill" style="width:${progress}%"></div>
                    </div>
                    <small>${progress}% gut gelernt</small>
                </div>
            `;
        }).join("");
    }
}

function renderDailyTasks(stats) {
    const box = document.getElementById("dailyTasksList");
    if (!box) return;

    box.innerHTML = stats.dailyTasks.tasks.map(task => {
        const percent = Math.round((task.progress / task.goal) * 100);

        return `
            <div class="dailyTask">
                <div class="dailyTaskTop">
                    <strong>${task.done ? "✅" : "🎯"} ${task.title}</strong>
                    <span>${task.progress}/${task.goal}</span>
                </div>
                <div class="progressBar">
                    <div class="progressFill" style="width:${percent}%"></div>
                </div>
                <small>Belohnung: ${task.reward} XP</small>
            </div>
        `;
    }).join("");
}

function renderAchievements(stats) {
    const box = document.getElementById("achievementsList");
    if (!box) return;

    box.innerHTML = achievementDefinitions.map(item => {
        const unlocked = stats.unlockedAchievements.includes(item.id);

        return `
            <div class="achievement ${unlocked ? "" : "locked"}">
                <strong>${unlocked ? "🏆" : "🔒"} ${item.title}</strong>
                <small>${item.text} · ${item.xp} XP</small>
            </div>
        `;
    }).join("");
}

function renderWeaknesses(stats) {
    const box = document.getElementById("weaknessList");
    if (!box) return;

    const list = countries
        .map(country => ({
            country,
            stats: stats.countryStats[country.land] || { richtig: 0, falsch: 0 }
        }))
        .filter(item => item.stats.falsch > 0)
        .sort((a, b) => b.stats.falsch - a.stats.falsch)
        .slice(0, 10);

    if (list.length === 0) {
        box.innerHTML = "<p>Noch keine Schwächen gespeichert.</p>";
        return;
    }

    box.innerHTML = list.map(item => `
        <div class="weaknessItem">
            <span>${item.country.land}</span>
            <span>${item.stats.falsch} Fehler</span>
        </div>
    `).join("");
}

function renderLexicon() {
    const search = normalizeAnswer(document.getElementById("lexiconSearch")?.value || "");
    const filter = document.getElementById("lexiconFilter")?.value || "Welt";
    const box = document.getElementById("lexiconList");
    const stats = loadStats();

    if (!box) return;

    const list = countries.filter(country => {
        const matchesSearch = normalizeAnswer(country.land).includes(search);
        const matchesFilter = filter === "Welt" || country.kontinent === filter;

        return matchesSearch && matchesFilter;
    });

    box.innerHTML = list.map(country => {
        const itemStats = stats.countryStats[country.land] || { richtig: 0, falsch: 0 };
        const status = getLearningStatus(stats, country);

        return `
            <button class="lexiconCard" onclick="showCountryDetail('${escapeForHtml(country.land)}')">
                <img src="${country.flag}" alt="Flagge von ${country.land}">
                <div>
                    <h3>${country.land}</h3>
                    <p>${capitalText(country)} · ${continentNames[country.kontinent]}</p>
                    <p>Status: ${status} · ✅ ${itemStats.richtig} · ❌ ${itemStats.falsch}</p>
                </div>
            </button>
        `;
    }).join("");
}

function showCountryDetail(countryName) {
    const country = countries.find(item => item.land === countryName);
    if (!country) return;

    const stats = loadStats();
    const itemStats = stats.countryStats[country.land] || { richtig: 0, falsch: 0 };
    const total = itemStats.richtig + itemStats.falsch;
    const accuracy = total === 0 ? 0 : Math.round((itemStats.richtig / total) * 100);
    const status = getLearningStatus(stats, country);

    document.getElementById("countryDetailContent").innerHTML = `
        <div class="countryDetailHero">
            <img src="${country.flag}" alt="Flagge von ${country.land}">
            <div>
                <h2>${country.land}</h2>
                <p>Hauptstadt: ${capitalText(country)}</p>
                <p>Kontinent: ${continentNames[country.kontinent]}</p>
            </div>
        </div>

        <div class="detailStatsGrid">
            <article class="detailStat"><span>Richtig</span><strong>${itemStats.richtig}</strong></article>
            <article class="detailStat"><span>Falsch</span><strong>${itemStats.falsch}</strong></article>
            <article class="detailStat"><span>Trefferquote</span><strong>${accuracy}%</strong></article>
        </div>

        <div class="detailStatsGrid">
            <article class="detailStat"><span>Status</span><strong>${status}</strong></article>
            <article class="detailStat"><span>Fragen</span><strong>${total}</strong></article>
            <article class="detailStat"><span>Kontinent</span><strong>${continentNames[country.kontinent]}</strong></article>
        </div>

        <button class="primaryAction" onclick="practiceCountry('${escapeForHtml(country.land)}')">
            Dieses Land üben
        </button>
    `;

    setView("countryDetailView");
}

function resetStats() {
    if (!confirm("Möchtest du wirklich alle Statistiken löschen?")) return;

    localStorage.removeItem(STAT_KEY);
    currentRun = 0;
    renderAllStats();
    showToast("Statistiken zurückgesetzt");
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.innerText = value;
}

function setWidth(id, percent) {
    const element = document.getElementById(id);
    if (element) element.style.width = percent + "%";
}

function escapeForHtml(text) {
    return String(text).replaceAll("'", "\\'");
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        const quizVisible = document.getElementById("quizView")?.classList.contains("activeView");

        if (quizVisible && selectedAnswerType === "input" && !answered) {
            checkAnswer();
        } else if (quizVisible && answered) {
            next();
        }
    }
});

renderAllStats();
showHome();