const countries = [
    { land: "Afghanistan", hauptstadt: "Kabul", flag: "https://flagcdn.com/w320/af.png", kontinent: "AsienOzeanien", population: 45047069, area: 652230, currency: "Afghanischer Afghani", languages: ["Paschtu", "Dari"], largestCity: "Kabul", iso2: "AF" },
    { land: "Ägypten", hauptstadt: "Kairo", flag: "https://flagcdn.com/w320/eg.png", kontinent: "Afrika", population: 116538258, area: 1001450, currency: "Ägyptisches Pfund", languages: ["Arabisch"] , largestCity: "Kairo", iso2: "EG" },
    { land: "Albanien", hauptstadt: "Tirana", flag: "https://flagcdn.com/w320/al.png", kontinent: "Europa", population: 2791765, area: 28748, currency: "Albanischer Lek", languages: ["Albanisch"] , largestCity: "Tirana", iso2: "AL" },
    { land: "Algerien", hauptstadt: "Algier", flag: "https://flagcdn.com/w320/dz.png", kontinent: "Afrika", population: 46814308, area: 2381741, currency: "Algerisches Dinar", languages: ["Arabisch", "Berberisch"] , largestCity: "Algier", iso2: "DZ" },
    { land: "Andorra", hauptstadt: "Andorra la Vella", flag: "https://flagcdn.com/w320/ad.png", kontinent: "Europa", population: 81938, area: 468, currency: "Euro", languages: ["Katalanisch"] , largestCity: "Andorra la Vella", iso2: "AD" },
    { land: "Angola", hauptstadt: "Luanda", flag: "https://flagcdn.com/w320/ao.png", kontinent: "Afrika", population: 37885849, area: 1246700, currency: "Angolanischer Kwanza", languages: ["Portugiesisch"] , largestCity: "Luanda", iso2: "AO" },
    { land: "Antigua und Barbuda", hauptstadt: "Saint John’s", flag: "https://flagcdn.com/w320/ag.png", kontinent: "Amerika", population: 93772, area: 442, currency: "Antiguan und Barbudanischer Dollar" , largestCity: "Saint John’s", iso2: "AG" },
    { land: "Äquatorialguinea", hauptstadt: ["Malabo", "Ciudad de la Paz"], flag: "https://flagcdn.com/w320/gq.png", kontinent: "Afrika", population: 1892516, area: 28051, currency: "Äquatorialguineischer Franc", languages: ["Spanisch", "Portugiesisch"] , largestCity: "Malabo", iso2: "GQ" },
    { land: "Argentinien", hauptstadt: "Buenos Aires", flag: "https://flagcdn.com/w320/ar.png", kontinent: "Amerika", population: 45696159, area: 2780400, currency: "Argentinischer Peso", languages: ["Spanisch", "Italienisch"] , largestCity: "Buenos Aires", iso2: "AR" },
    { land: "Äthiopien", hauptstadt: "Addis Abeba", flag: "https://flagcdn.com/w320/et.png", kontinent: "Afrika", population: 132059767, area: 1104300, currency: "Äthiopischer Birr", languages: ["Amharisch"] , largestCity: "Addis Abeba", iso2: "ET" },
    { land: "Australien", hauptstadt: "Canberra", flag: "https://flagcdn.com/w320/au.png", kontinent: "AsienOzeanien", population: 26713205, area: 7692024, currency: "Australischer Dollar", languages: ["Englisch"], largestCity: "Melbourne", iso2: "AU" },

    { land: "Bahamas", hauptstadt: "Nassau", flag: "https://flagcdn.com/w320/bs.png", kontinent: "Amerikaa", population: 393248, area: 13943, currency: "Bahamaischer Dollar", languages: ["Englisch"], largestCity: "Nassau", iso2: "BS" },
    { land: "Bahrain", hauptstadt: "Manama", flag: "https://flagcdn.com/w320/bh.png", kontinent: "AsienOzeanien", population: 1788874, area: 694.5, currency: "Bahrainischer Dinar", languages: ["Arabisch"], largestCity: "Manama", iso2: "BH" },
    { land: "Bangladesch", hauptstadt: "Dhaka", flag: "https://flagcdn.com/w320/bd.png", kontinent: "AsienOzeanien", population: 16468938, area: 147570, currency: "Bangladeschischer Taka", languages: ["Bengalisch"], largestCity: "Dhaka", iso2: "BD" },
    { land: "Barbados", hauptstadt: "Bridgetown", flag: "https://flagcdn.com/w320/bb.png", kontinent: "Amerika", population: 28737, area: 430, ccurrency: "Barbadoscher Dollar", languages: ["Englisch"], largestCity: "Bridgetown", iso2: "BB" },
    { land: "Belarus", hauptstadt: "Minsk", flag: "https://flagcdn.com/w320/by.png", kontinent: "Europa", population: 9398861, area: 207600 , currency: "Belarussischer Rubel", languages: ["Belarussisch", "Russisch"], largestCity: "Minsk", iso2: "BY" },
    { land: "Belgien", hauptstadt: "Brüssel", flag: "https://flagcdn.com/w320/be.png", kontinent: "Europa", population: 11492641, area: 30528 , currency: "Euro", languages: ["Niederländisch", "Französisch", "Deutsch"], largestCity: "Brüssel", iso2: "BE" },
    { land: "Belize", hauptstadt: "Belmopan", flag: "https://flagcdn.com/w320/bz.png", kontinent: "Amerika", population: 397621, area: 22966 , currency: "Belize-Dollar", languages: ["Englisch", "Spanisch"], largestCity: "Belize-City", iso2:    "BZ" },
    { land: "Benin", hauptstadt: ["Porto-Novo", "Cotonou"], flag: "https://flagcdn.com/w320/bj.png", kontinent: "Afrika", population: 12123198 , currency: "Westafrikanischer CFA-Franc", languages: ["Französisch"], largestCity: "Cotonou", iso2: "BJ" },
    { land: "Bhutan", hauptstadt: "Thimphu", flag: "https://flagcdn.com/w320/bt.png", kontinent: "AsienOzeanien", population: 775697 , currency: "Bhutanischer Ngultrum", languages: ["Dzongkha"], largestCity: "Thimphu", iso2: "BT" },
    { land: "Bolivien", hauptstadt: ["Sucre", "La Paz"], flag: "https://flagcdn.com/w320/bo.png", kontinent: "Amerika", population: 11675564 , currency: "Boliviano", languages: ["Spanisch", "Quechua", "Aymara"], largestCity: "Santa Cruz de la Sierra", iso2: "BO" },
    { land: "Bosnien und Herzegowina", hauptstadt: "Sarajevo", flag: "https://flagcdn.com/w320/ba.png", kontinent: "Europa", population: 3280815 , currency: "Konvertible Mark", languages: ["Bosnisch", "Kroatisch", "Serbisch"], largestCity: "Sarajevo", iso2: "BA" },
    { land: "Botswana", hauptstadt: "Gaborone", flag: "https://flagcdn.com/w320/bw.png", kontinent: "Afrika", population: 2347989 , currency: "Botswanischer Pula", languages: ["Englisch", "Setswana"], largestCity: "Gaborone", iso2: "BW" },
    { land: "Brasilien", hauptstadt: "Brasília", flag: "https://flagcdn.com/w320/br.png", kontinent: "Amerika", population: 215444655 , currency: "Brasilianischer Real", languages: ["Portugiesisch"], largestCity: "São Paulo", iso2: "BR" },
    { land: "Brunei", hauptstadt: "Bandar Seri Begawan", flag: "https://flagcdn.com/w320/bn.png", kontinent: "AsienOzeanien", population: 445585 , currency: "Brunei-Dollar", languages: ["Malaiisch"], largestCity: "Bandar Seri Begawan", iso2: "BN" },
    { land: "Burkina Faso", hauptstadt: "Ouagadougou", flag: "https://flagcdn.com/w320/bf.png", kontinent: "Afrika", population: 2090348 , currency: "Westafrikanischer CFA-Franc", languages: ["Französisch"], largestCity: "Ouagadougou", iso2: "BF" },
    { land: "Burundi", hauptstadt: "Gitega", flag: "https://flagcdn.com/w320/bi.png", kontinent: "Afrika", population: 1186671 , currency: "Burundischer Franc", languages: ["Kirundi", "Französisch", "Englisch"], largestCity: "Bujumbura", iso2: "BI" },
    
    { land: "Chile", hauptstadt: "Santiago", flag: "https://flagcdn.com/w320/cl.png", kontinent: "Amerika", population: 19116201 , currency: "Chilenischer Peso", languages: ["Spanisch"], largestCity: "Santiago", iso2: "CL" },
    { land: "China", hauptstadt: "Peking", flag: "https://flagcdn.com/w320/cn.png", kontinent: "AsienOzeanien", population: 1439323776 , currency: "Chinesischer Yuan", languages: ["Mandarin"], largestCity: "Shanghai", iso2: "CN" },
    { land: "Costa Rica", hauptstadt: "San José", flag: "https://flagcdn.com/w320/cr.png", kontinent: "Amerika", population: 5094118 , currency: "Costa-Rica-Colón", languages: ["Spanisch"], largestCity: "San José", iso2: "CR" },

    { land: "Dänemark", hauptstadt: "Kopenhagen", flag: "https://flagcdn.com/w320/dk.png", kontinent: "Europa", population: 5822763 , currency: "Dänische Krone", languages: ["Dänisch"], largestCity: "Kopenhagen", iso2: "DK" },
    { land: "Deutschland", hauptstadt: "Berlin", flag: "https://flagcdn.com/w320/de.png", kontinent: "Europa", population: 83783942 , currency: "Euro", languages: ["Deutsch"], largestCity: "Berlin", iso2: "DE" },
    { land: "Dominica", hauptstadt: "Roseau", flag: "https://flagcdn.com/w320/dm.png", kontinent: "Amerika", population: 71991 , currency: "Ostkaribischer Dollar", languages: ["Englisch"], largestCity: "Roseau", iso2: "DM" },
    { land: "Dominikanische Republik", hauptstadt: "Santo Domingo", flag: "https://flagcdn.com/w320/do.png", kontinent: "Amerika", population: 4687520 , currency: "Dominikanischer Peso", languages: ["Spanisch"], largestCity: "Santo Domingo", iso2: "DO" },
    { land: "Dschibuti", hauptstadt: "Dschibuti", flag: "https://flagcdn.com/w320/dj.png", kontinent: "Afrika", population: 988000 , currency: "Dschibutischer Franc", languages: ["Französisch", "Arabisch"], largestCity: "Dschibuti", iso2: "DJ" },

    { land: "Ecuador", hauptstadt: "Quito", flag: "https://flagcdn.com/w320/ec.png", kontinent: "Amerika", population: 17643056, currency: "US-Dollar", languages: ["Spanisch", "Kichwa", "Shuar"], largestCity: "Guayaquil", iso2: "EC" },
    { land: "El Salvador", hauptstadt: "San Salvador", flag: "https://flagcdn.com/w320/sv.png", kontinent: "Amerika", population: 6486205 , currency: "US-Dollar", languages: ["Spanisch"], largestCity: "San Salvador", iso2: "SV" },
    { land: "Elfenbeinküste", hauptstadt: ["Yamoussoukro", "Abidjan"], flag: "https://flagcdn.com/w320/ci.png", kontinent: "Afrika", population: 26376635 , currency: "Westafrikanischer CFA-Franc", languages: ["Französisch"], largestCity: "Abidjan", iso2: "CI" },
    { land: "Eritrea", hauptstadt: "Asmara", flag: "https://flagcdn.com/w320/er.png", kontinent: "Afrika", population: 5152918 , currency: "Eritreischer Nakfa", languages: ["Tigrinya", "Arabisch", "Englisch"], largestCity: "Asmara", iso2: "ER" },
    { land: "Estland", hauptstadt: "Tallinn", flag: "https://flagcdn.com/w320/ee.png", kontinent: "Europa", population: 1326535 , currency: "Euro", languages: ["Estnisch"], largestCity: "Tallinn", iso2: "EE" },
    { land: "Eswatini", hauptstadt: ["Mbabane", " Lobamba"], flag: "https://flagcdn.com/w320/sz.png", kontinent: "Afrika", population: 1169944 , currency: "Lilangeni", languages: ["Siswati", "Englisch"], largestCity: "Manzini", iso2: "SZ" },

    { land: "Fidschi", hauptstadt: "Suva", flag: "https://flagcdn.com/w320/fj.png", kontinent: "AsienOzeanien", population: 924704 , currency: "Fidschi-Dollar", languages: ["Englisch", "Fidschianisch", "Fidschi-Hindi"], largestCity: "Suva", iso2: "FJ" },
    { land: "Finnland", hauptstadt: "Helsinki", flag: "https://flagcdn.com/w320/fi.png", kontinent: "Europa", population: 5540745 , currency: "Euro", languages: ["Finnisch", "Schwedisch"], largestCity: "Helsinki", iso2: "FI" },
    { land: "Frankreich", hauptstadt: "Paris", flag: "https://flagcdn.com/w320/fr.png", kontinent: "Europa", population: 68129001 , currency: "Euro", languages: ["Französisch"], largestCity: "Paris", iso2: "FR" },

    { land: "Gabun", hauptstadt: "Libreville", flag: "https://flagcdn.com/w320/ga.png", kontinent: "Afrika", population: 2090000 , currency: "Zentralafrikanischer CFA-Franc", languages: ["Französisch"], largestCity: "Libreville", iso2: "GA" },
    { land: "Gambia", hauptstadt: "Banjul", flag: "https://flagcdn.com/w320/gm.png", kontinent: "Afrika", population: 2416667 , currency: "Gambischer Dalasi", languages: ["Englisch"], largestCity: "Serekunda", iso2: "GM" },
    { land: "Georgien", hauptstadt: "Tiflis", flag: "https://flagcdn.com/w320/ge.png", kontinent: "AsienOzeanien", population: 3714000 , currency: "Georgischer Lari", languages: ["Georgisch"], largestCity: "Tiflis", iso2: "GE" },
    { land: "Ghana", hauptstadt: "Accra", flag: "https://flagcdn.com/w320/gh.png", kontinent: "Afrika", population: 31072945 , currency: "Ghanaischer Cedi", languages: ["Englisch"], largestCity: "Accra", iso2: "GH" },
    { land: "Griechenland", hauptstadt: "Athen", flag: "https://flagcdn.com/w320/gr.png", kontinent: "Europa", population: 10423054 , currency: "Euro", languages: ["Griechisch"], largestCity: "Athen", iso2: "GR" },
    { land: "Guatemala", hauptstadt: "Guatemala-Stadt", flag: "https://flagcdn.com/w320/gt.png", kontinent: "Amerika", population: 17915567 , currency: "Quetzal", languages: ["Spanisch"], largestCity: "Guatemala-Stadt", iso2: "GT" },
    { land: "Guinea", hauptstadt: "Conakry", flag: "https://flagcdn.com/w320/gn.png", kontinent: "Afrika", population: 13139888 , currency: "Guineischer Franc", languages: ["Französisch"], largestCity: "Conakry", iso2: "GN" },
    { land: "Guyana", hauptstadt: "Georgetown", flag: "https://flagcdn.com/w320/gy.png", kontinent: "Amerika", population: 786552 , currency: "Guyana-Dollar", languages: ["Englisch"], largestCity: "Georgetown", iso2: "GY" },

    { land: "Haiti", hauptstadt: "Port-au-Prince", flag: "https://flagcdn.com/w320/ht.png", kontinent: "Amerika", population: 1140253 , currency: "Gourde", languages: ["Haitianisches Kreol", "Französisch"], largestCity: "Port-au-Prince", iso2: "HT" },
    { land: "Honduras", hauptstadt: "Tegucigalpa", flag: "https://flagcdn.com/w320/hn.png", kontinent: "Amerika", population: 9746117 , currency: "Lempira", languages: ["Spanisch"], largestCity: "Tegucigalpa", iso2: "HN" },

    { land: "Indien", hauptstadt: "Neu-Delhi", flag: "https://flagcdn.com/w320/in.png", kontinent: "AsienOzeanien", population: 1380004385 , currency: "Indische Rupie", languages: ["Hindi", "Englisch"], largestCity: "Delhi", iso2: "IN" },
    { land: "Indonesien", hauptstadt: "Jakarta", flag: "https://flagcdn.com/w320/id.png", kontinent: "AsienOzeanien", population: 273523615 , currency: "Indonesische Rupiah", languages: ["Indonesisch"],largestCity: "Jakarta", iso2: "ID" },
    { land: "Irak", hauptstadt: "Bagdad", flag: "https://flagcdn.com/w320/iq.png", kontinent: "AsienOzeanien", population: 40222494 , currency: "Irakischer Dinar", languages: ["Arabisch", "Kurdisch"], largestCity: "Bagdad", iso2: "IQ" },
    { land: "Iran", hauptstadt: "Teheran", flag: "https://flagcdn.com/w320/ir.png", kontinent: "AsienOzeanien", population: 83992949 , currency: "Iranischer Rial", languages: ["Persisch"], largestCity: "Teheran", iso2: "IR" },
    { land: "Irland", hauptstadt: "Dublin", flag: "https://flagcdn.com/w320/ie.png", kontinent: "Europa", population: 4937786 , currency: "Euro", languages: ["Irisch", "Englisch"], largestCity: "Dublin", iso2: "IE" },
    { land: "Israel", hauptstadt: "Jerusalem", flag: "https://flagcdn.com/w320/il.png", kontinent: "AsienOzeanien", population: 9216926 , currency: "Israelischer Neuer Schekel", languages: ["Hebräisch", "Arabisch"], largestCity: "Tel Aviv", iso2: "IL" },
    { land: "Italien", hauptstadt: "Rom", flag: "https://flagcdn.com/w320/it.png", kontinent: "Europa", population: 58948561 , currency: "Euro", languages: ["Italienisch"], largestCity: "Rom", iso2: "IT" },

    { land: "Jamaika", hauptstadt: "Kingston", flag: "https://flagcdn.com/w320/jm.png", kontinent: "Amerika", population: 2961167 , currency: "Jamaika-Dollar", languages: ["Englisch", "Jamaikanisches Patois"], largestCity: "Kingston", iso2: "JM" },
    { land: "Japan", hauptstadt: "Tokio", flag: "https://flagcdn.com/w320/jp.png", kontinent: "AsienOzeanien", population: 126476461 , currency: "Japanischer Yen", languages: ["Japanisch"], largestCity: "Tokio", iso2: "JP" },
    { land: "Jemen", hauptstadt: "Sanaa", flag: "https://flagcdn.com/w320/ye.png", kontinent: "AsienOzeanien", population: 24183755 , currency: "Jemenitischer Rial", languages: ["Arabisch"], largestCity: "Sanaa", iso2: "YE" },
    { land: "Jordanien", hauptstadt: "Amman", flag: "https://flagcdn.com/w320/jo.png", kontinent: "AsienOzeanien", population: 10203140 , currency: "Jordanischer Dinar", languages: ["Arabisch"], largestCity: "Amman", iso2: "JO" },
    
    { land: "Kanada", hauptstadt: "Ottawa", flag: "https://flagcdn.com/w320/ca.png", kontinent: "Amerika", population: 38005238 , currency: "Kanadischer Dollar", languages: ["Englisch", "Französisch"], largestCity: "Toronto", iso2: "CA" },
    { land: "Kap Verde", hauptstadt: "Praia", flag: "https://flagcdn.com/w320/cv.png", kontinent: "Afrika", population: 555987 , currency: "Kap-Verde-Escudo", languages: ["Portugiesisch", "Kapverdisches Kreol"], largestCity: "Praia", iso2: "CV" },
    { land: "Kasachstan", hauptstadt: "Astana", flag: "https://flagcdn.com/w320/kz.png", kontinent: "AsienOzeanien", population: 19193600 , currency: "Kasachischer Tenge", languages: ["Kasachisch", "Russisch"], largestCity: "Almaty", iso2: "KZ" },
    { land: "Katar", hauptstadt: "Doha", flag: "https://flagcdn.com/w320/qa.png", kontinent: "AsienOzeanien", population: 2881060 , currency: "Katar-Riyal", languages: ["Arabisch"], largestCity: "Doha", iso2: "QA" },
    { land: "Kenia", hauptstadt: "Nairobi", flag: "https://flagcdn.com/w320/ke.png", kontinent: "Afrika", population: 53771300, currency: "Kenia-Schilling", languages: ["Englisch", "Swahili"], largestCity: "Nairobi", iso2: "KE" },
    { land: "Kirgisistan", hauptstadt: "Bischkek", flag: "https://flagcdn.com/w320/kg.png", kontinent: "AsienOzeanien", population: 6524641 , currency: "Kirgisischer Som", languages: ["Kirgisisch", "Russisch"], largestCity: "Bischkek", iso2: "SC" },
    { land: "Kiribati", hauptstadt: "South Tarawa", flag: "https://flagcdn.com/w320/ki.png", kontinent: "AsienOzeanien", population: 119449, currency: "Australischer Dollar", languages: ["Kiribatisch", "Englisch"], largestCity: "South Tarawa", iso2: "KI" },
    { land: "Kolumbien", hauptstadt: "Bogotá", flag: "https://flagcdn.com/w320/co.png", kontinent: "Amerika", population: 50882891 , currency: "Kolumbianischer Peso", languages: ["Spanisch"], largestCity: "Bogotá", iso2: "CO" },
    { land: "Kongo(Republik)", hauptstadt: "Brazzaville", flag: "https://flagcdn.com/w320/cg.png", kontinent: "Afrika", population: 5000000 , currency: "Zentralafrikanischer CFA-Franc", languages: ["Französisch"], largestCity: "Brazzaville", iso2: "CG" },
    { land: "Kroatien", hauptstadt: "Zagreb", flag: "https://flagcdn.com/w320/hr.png", kontinent: "Europa", population: 4047468 , currency: "Euro", languages: ["Kroatisch"], largestCity: "Zagreb", iso2: "HR" },
    { land: "Kuba", hauptstadt: "Havanna", flag: "https://flagcdn.com/w320/cu.png", kontinent: "Amerika", population: 11326616 , currency: "Kubanischer Peso", languages: ["Spanisch"], largestCity: "Havanna", iso2: "CU" },
    { land: "Kuwait", hauptstadt: "Kuwait-Stadt", flag: "https://flagcdn.com/w320/kw.png", kontinent: "AsienOzeanien", population: 4270571 , currency: "Kuwaitischer Dinar", languages: ["Arabisch"], largestCity: "Kuwait-Stadt", iso2: "KW" },

    { land: "Laos", hauptstadt: "Vientiane", flag: "https://flagcdn.com/w320/la.png", kontinent: "AsienOzeanien", population: 7275560 , currency: "Laotischer Kip", languages: ["Laotisch"], largestCity: "Vientiane", iso2: "LA" },
    { land: "Lesotho", hauptstadt: "Maseru", flag: "https://flagcdn.com/w320/ls.png", kontinent: "Afrika", population: 2108132 , currency: "Loti", languages: ["Sesotho", "Englisch"], largestCity: "Maseru", iso2: "LS" },
    { land: "Lettland", hauptstadt: "Riga", flag: "https://flagcdn.com/w320/lv.png", kontinent: "Europa", population: 1884896 , currency: "Euro", languages: ["Lettisch"], largestCity: "Riga", iso2: "LV" },
    { land: "Libyen", hauptstadt: "Tripolis", flag: "https://flagcdn.com/w320/ly.png", kontinent: "Afrika", population: 6871292 , currency: "Libyscher Dinar", languages: ["Arabisch"], largestCity: "Tripolis", iso2: "LY" },
    { land: "Liechtenstein", hauptstadt: "Vaduz", flag: "https://flagcdn.com/w320/li.png", kontinent: "Europa", population: 38137 , currency: "Schweizer Franken", languages: ["Deutsch"], largestCity: "Schaan", iso2: "LI" },
    { land: "Litauen", hauptstadt: "Vilnius", flag: "https://flagcdn.com/w320/lt.png", kontinent: "Europa", population: 2722288 , currency: "Euro", languages: ["Litauisch"], largestCity: "Vilnius", iso2: "LT" },
    { land: "Luxemburg", hauptstadt: "Luxemburg", flag: "https://flagcdn.com/w320/lu.png", kontinent: "Europa", population: 625974, currency: "Euro", languages: ["Luxemburgisch", "Französisch", "Deutsch"], largestCity: "Luxemburg", iso2: "LU" },

    { land: "Madagaskar", hauptstadt: "Antananarivo", flag: "https://flagcdn.com/w320/mg.png", kontinent: "Afrika", population: 2769101 , currency: "Ariary", languages: ["Malagasy", "Französisch"], largestCity: "Antananarivo", iso2: "MG" },
    { land: "Malawi", hauptstadt: "Lilongwe", flag: "https://flagcdn.com/w320/mw.png", kontinent: "Afrika", population: 18628747 , currency: "Malawischer Kwacha", languages: ["Englisch", "Chichewa"], largestCity: "Lilongwe", iso2: "MW" },
    { land: "Malta", hauptstadt: "Valletta", flag: "https://flagcdn.com/w320/mt.png", kontinent: "Europa", population: 425387 , currency: "Euro", languages: ["Maltesisch", "Englisch"], largestCity: "Birkirkara", iso2: "MT" },
    { land: "Marokko", hauptstadt: "Rabat", flag: "https://flagcdn.com/w320/ma.png", kontinent: "Afrika", population: 3602913 , currency: "Marokkanischer Dirham", languages: ["Arabisch", "Tamazight"], largestCity: "Casablanca", iso2: "MA" },
    { land: "Marshallinseln", hauptstadt: "Majuro", flag: "https://flagcdn.com/w320/mh.png", kontinent: "AsienOzeanien", population: 58413 , currency: "US-Dollar", languages: ["Marshallisch", "Englisch"], largestCity: "Majuro", iso2: "MH" },
    { land: "Mauretanien", hauptstadt: "Nouakchott", flag: "https://flagcdn.com/w320/mr.png", kontinent: "Afrika", population: 4649660 , currency: "Mauretanischer Ouguiya", languages: ["Arabisch"], largestCity: "Nouakchott", iso2: "MR" },
    { land: "Mauritius", hauptstadt: "Port Louis", flag: "https://flagcdn.com/w320/mu.png", kontinent: "Afrika", population: 1271753 , currency: "Mauritius-Rupie", languages: ["Englisch", "Französisch", "Mauritisches Kreol"], largestCity: "Port Louis", iso2: "MU" },
    { land: "Mexiko", hauptstadt: "Mexiko-Stadt", flag: "https://flagcdn.com/w320/mx.png", kontinent: "Amerika", population: 128932754 , currency: "Mexikanischer Peso", languages: ["Spanisch"], largestCity: "Mexiko-Stadt", iso2: "MX" },
    { land: "Montenegro", hauptstadt: "Podgorica", flag: "https://flagcdn.com/w320/me.png", kontinent: "Afrika", population: 628065 , currency: "Euro", languages: ["Montenegrinisch"], largestCity: "Podgorica", iso2: "ME" },
    { land: "Mosambik", hauptstadt: "Maputo", flag: "https://flagcdn.com/w320/mz.png", kontinent: "Afrika", population: 31255435 , currency: "Metical", languages: ["Portugiesisch"], largestCity: "Maputo", iso2: "MZ" },
    { land: "Myanmar", hauptstadt: "Naypyidaw", flag: "https://flagcdn.com/w320/mm.png", kontinent: "AsienOzeanien", population: 54409800 , currency: "Kyat", languages: ["Birmanisch"], largestCity: "Yangon", iso2: "MM" },

    { land: "Namibia", hauptstadt: "Windhoek", flag: "https://flagcdn.com/w320/na.png", kontinent: "Afrika", population: 2540959 , currency: "Namibischer Dollar", languages: ["Englisch"], largestCity: "Windhoek", iso2: "NA" },
    { land: "Nauru", hauptstadt: "Yaren", flag: "https://flagcdn.com/w320/nr.png", kontinent: "AsienOzeanien", population: 10824 , currency: "Australischer Dollar", languages: ["Nauruisch", "Englisch"], largestCity: "Yaren", iso2: "NR" },
    { land: "Nepal", hauptstadt: "Kathmandu", flag: "https://flagcdn.com/w320/np.png", kontinent: "AsienOzeanien", population: 29131877 , currency: "Nepalesische Rupie", languages: ["Nepali"], largestCity: "Kathmandu", iso2: "NP" },
    { land: "Neuseeland", hauptstadt: "Wellington", flag: "https://flagcdn.com/w320/nz.png", kontinent: "AsienOzeanien", population: 4822233 , currency: "Neuseeländischer Dollar", languages: ["Englisch", "Māori"], largestCity: "Auckland", iso2: "NZ" },
    { land: "Niger", hauptstadt: "Niamey", flag: "https://flagcdn.com/w320/ne.png", kontinent: "Afrika", population: 24200000 , currency: "Westafrikanischer CFA-Franc", languages: ["Französisch"], largestCity: "Niamey", iso2: "NE" },
    { land: "Nigeria", hauptstadt: "Abuja", flag: "https://flagcdn.com/w320/ng.png", kontinent: "Afrika", population: 206139587 , currency: "Nigerianischer Naira", languages: ["Englisch"], largestCity: "Lagos", iso2: "NG" },
    { land: "Nordkorea", hauptstadt: "Pjöngjang", flag: "https://flagcdn.com/w320/kp.png", kontinent: "AsienOzeanien", population: 25778316 , currency: "Nordkoreanischer Won", languages: ["Koreanisch"], largestCity: "Pjöngjang", iso2: "KP" },
    { land: "Nordmazedonien", hauptstadt: "Skopje", flag: "https://flagcdn.com/w320/mk.png", kontinent: "Europa", population: 2083380 , currency: "Mazedonischer Denar", languages: ["Mazedonisch", "Albanisch"], largestCity: "Skopje", iso2: "MK" },
    { land: "Norwegen", hauptstadt: "Oslo", flag: "https://flagcdn.com/w320/no.png", kontinent: "Europa", population: 5421241 , currency: "Norwegische Krone", languages: ["Norwegisch"], largestCity: "Oslo", iso2: "NO" },

    { land: "Oman", hauptstadt: "Maskat", flag: "https://flagcdn.com/w320/om.png", kontinent: "AsienOzeanien", population: 4974665 , currency: "Omanischer Rial", languages: ["Arabisch"], largestCity: "Maskat", iso2: "OM" },
    { land: "Österreich", hauptstadt: "Wien", flag: "https://flagcdn.com/w320/at.png", kontinent: "Europa", population: 9006400 , currency: "Euro", languages: ["Deutsch"], largestCity: "Wien", iso2: "AT" },
    { land: "Osttimor", hauptstadt: "Dili", flag: "https://flagcdn.com/w320/tl.png", kontinent: "AsienOzeanien", population: 1318445 , currency: "US-Dollar", languages: ["Tetum", "Portugiesisch"],currency: "US-Dollar", languages: ["Tetum", "Portugiesisch"], largestCity: "Dili", iso2: "TL" },

    { land: "Pakistan", hauptstadt: "Islamabad", flag: "https://flagcdn.com/w320/pk.png", kontinent: "AsienOzeanien", population: 220892340 , currency: "Pakistanische Rupie", languages: ["Urdu", "Englisch"], largestCity: "Karatschi", iso2: "PK" },
    { land: "Palästina", hauptstadt: ["Ramallah", "Ostjerusalem"], flag: "https://flagcdn.com/w320/ps.png", kontinent: "AsienOzeanien", population: 4920000 , currency: "Israelischer Neuer Schekel", languages: ["Arabisch"], largestCity: "Gaza-Stadt", iso2: "PS" },
    { land: "Palau", hauptstadt: "Ngerulmud", flag: "https://flagcdn.com/w320/pw.png", kontinent: "AsienOzeanien" , population: 18092 , currency: "US-Dollar", languages: ["Palauisch", "Englisch"], largestCity: "Koror", iso2: "PW" },
    { land: "Panama", hauptstadt: "Panama-Stadt", flag: "https://flagcdn.com/w320/pa.png", kontinent: "Amerika", population: 431475 , currency: "Balboa", languages: ["Spanisch"], largestCity: "Panama-Stadt", iso2: "PA" },
    { land: "Papua-Neuguinea", hauptstadt: "Port Moresby", flag: "https://flagcdn.com/w320/pg.png", kontinent: "AsienOzeanien", population: 8947027 , currency: "Papua-Neuguineischer Kina", languages: ["Englisch", "Tok Pisin", "Hiri Motu"], largestCity: "Port Moresby", iso2: "PG" },
    { land: "Paraguay", hauptstadt: "Asunción", flag: "https://flagcdn.com/w320/py.png", kontinent: "Amerika", population: 7132538 , currency: "Guaraní", languages: ["Spanisch", "Guaraní"], largestCity: "Asunción", iso2: "PY" },
    { land: "Peru", hauptstadt: "Lima", flag: "https://flagcdn.com/w320/pe.png", kontinent: "Amerika", population: 32971854 , currency: "Peruanischer Sol", languages: ["Spanisch", "Quechua", "Aymara"], largestCity: "Lima", iso2: "PE" },
    { land: "Philippinen", hauptstadt: "Manila", flag: "https://flagcdn.com/w320/ph.png", kontinent: "AsienOzeanien", population: 109581078 , currency: "Philippinischer Peso", languages: ["Filipino", "Englisch"], largestCity: "Manila", iso2: "PH" },
    { land: "Polen", hauptstadt: "Warschau", flag: "https://flagcdn.com/w320/pl.png", kontinent: "Europa", population: 37846809 , currency: "Polnischer Złoty", languages: ["Polnisch"], largestCity: "Warschau", iso2: "PL" },
    { land: "Portugal", hauptstadt: "Lissabon", flag: "https://flagcdn.com/w320/pt.png", kontinent: "Europa", population: 10196709, currency: "Euro", languages: ["Portugiesisch"], largestCity: "Lissabon", iso2: "PT" },

    { land: "Ruanda", hauptstadt: "Kigali", flag: "https://flagcdn.com/w320/rw.png", kontinent: "Afrika" , population: 12952209 , currency: "Ruanda-Franc", languages: ["Kinyarwanda", "Englisch", "Französisch"], largestCity: "Kigali", iso2: "RW" },
    { land: "Rumänien", hauptstadt: "Bukarest", flag: 'https://flagcdn.com/w320/ro.png', kontinent: "Europa" , population: 19237691 , currency: "Rumänischer Leu", languages: ["Rumänisch"], largestCity: "Bukarest", iso2: "RO" },
    { land: "Russland", hauptstadt: 'Moskau', flag: 'https://flagcdn.com/w320/ru.png', kontinent: "AsienOzeanien" , population: 145912025 , currency: "Russischer Rubel", languages: ["Russisch"], largestCity: "Moskau", iso2: "RU" },

    { land: "St. Kitts und Nevis", hauptstadt: "Basseterre", flag: "https://flagcdn.com/w320/kn.png", kontinent: "Amerika" , population: 53192 , currency: "Ostkaribischer Dollar", languages: ["Englisch"], largestCity: "Basseterre", iso2: "KN" },
    { land: "St. Lucia", hauptstadt: "Castries", flag: "https://flagcdn.com/w320/lc.png", kontinent: "Amerika" , population: 183627 , currency: "Ostkaribischer Dollar", languages: ["Englisch"], largestCity: "Castries", iso2: "LC" },
    { land: "St. Vincent und die Grenadinen", hauptstadt: "Kingstown", flag: "https://flagcdn.com/w320/vc.png", kontinent: "Amerika" , population: 110210 , currency: "Ostkaribischer Dollar", languages: ["Englisch"], largestCity: "Kingstown", iso2: "VC" },
    { land: "Salomonen", hauptstadt: "Honiara", flag: "https://flagcdn.com/w320/sb.png", kontinent: "AsienOzeanien" , population: 65285 , currency: "Salomonen-Dollar", languages: ["Englisch"], largestCity: "Honiara", iso2: "SB" },
    { land: "Sambia", hauptstadt: "Lusaka", flag: "https://flagcdn.com/w320/zm.png", kontinent: "Afrika" , population: 18383956 , currency: "Sambischer Kwacha", languages: ["Englisch"], largestCity: "Lusaka", iso2: "ZM" },
    { land: "Samoa", hauptstadt: "Apia", flag: "https://flagcdn.com/w320/ws.png", kontinent: "AsienOzeanien" , population: 198414 , currency: "Samoanischer Tala", languages: ["Samoanisch", "Englisch"], largestCity: "Apia", iso2: "WS" },
    { land: "San Marino", hauptstadt: "San Marino", flag: "https://flagcdn.com/w320/sm.png", kontinent: "Europa" , population: 33931 , currency: "Euro", languages: ["Italienisch"], largestCity: "San Marino", iso2: "SM" },
    { land: "São Tomé und Príncipe", hauptstadt: "São Tomé", flag: "https://flagcdn.com/w320/st.png", kontinent: "Afrika" , population: 219159 , currency: "São-Tomé-Dobra", languages: ["Portugiesisch"], largestCity: "São Tomé", iso2: "ST" },
    { land: "Saudi-Arabien", hauptstadt: "Riad", flag: "https://flagcdn.com/w320/sa.png", kontinent: "AsienOzeanien" , population: 34813871 , currency: "Saudi-Riyal", languages: ["Arabisch"], largestCity: "Riad", iso2: "SA" },
    { land: "Schweden", hauptstadt: "Stockholm", flag: "https://flagcdn.com/w320/se.png", kontinent: "Europa" , population: 10099265 , currency: "Schwedische Krone", languages: ["Schwedisch"], largestCity: "Stockholm", iso2: "SE" },
    { land: "Schweiz", hauptstadt: "Bern", flag: "https://flagcdn.com/w320/ch.png", kontinent: "Europa" , population: 8654602 , currency: "Schweizer Franken", languages: ["Deutsch", "Französisch", "Italienisch", "Rätoromanisch"], largestCity: "Zürich", iso2: "CH" },
    { land: "Senegal", hauptstadt: "Dakar", flag: "https://flagcdn.com/w320/sn.png", kontinent: "Afrika" , population: 16743927 , currency: "Westafrikanischer CFA-Franc", languages: ["Französisch"], largestCity: "Dakar", iso2: "SN" },
    { land: "Serbien", hauptstadt: "Belgrad", flag: "https://flagcdn.com/w320/rs.png", kontinent: "Europa" , population: 6908254 , currency: "Serbischer Dinar", languages: ["Serbisch"], largestCity: "Belgrad", iso2: "RS" },
    { land: "Seychellen", hauptstadt: "Victoria", flag: "https://flagcdn.com/w320/sc.png", kontinent: "Afrika" , population: 98215 , currency: "Seychellen-Rupie", languages: ["Seychellenkreol", "Englisch", "Französisch"], largestCity: "Victoria", iso2: "SC" },
    { land: "Sierra Leone", hauptstadt: "Freetown", flag: "https://flagcdn.com/w320/sl.png", kontinent: "Afrika" , population: 7976845 , currency: "Leone", languages: ["Englisch"], largestCity: "Freetown", iso2: "SL" },
    { land: "Simbabwe", hauptstadt: "Harare", flag: "https://flagcdn.com/w320/zw.png", kontinent: "Afrika" , population: 14862924 , currency: "Simbabwe-Dollar", languages: ["Englisch", "Shona", "Ndebele"], largestCity: "Harare", iso2: "ZW" },
    { land: "Singapur", hauptstadt: "Singapur", flag: "https://flagcdn.com/w320/sg.png", kontinent: "AsienOzeanien", population: 5850343, currency: "Singapur-Dollar", languages: ["Englisch", "Malaiisch", "Mandarin", "Tamil"], largestCity: "Singapur", iso2: "SG" },
    { land: "Slowakei", hauptstadt: "Bratislava", flag: "https://flagcdn.com/w320/sk.png", kontinent: "Europa" , population: 5456362 , currency: "Euro", languages: ["Slowakisch"], largestCity: "Bratislava", iso2: "SK" },
    { land: "Slowenien", hauptstadt: "Ljubljana", flag: "https://flagcdn.com/w320/si.png", kontinent: "Europa" , population: 2080908 , currency: "Euro", languages: ["Slowenisch"], largestCity: "Ljubljana", iso2: "SI" },
    { land: "Somalia", hauptstadt: "Mogadischu", flag: "https://flagcdn.com/w320/so.png", kontinent: "Afrika" , population: 15893219 , currency: "Somalischer Schilling", languages: ["Somali", "Arabisch"], largestCity: "Mogadischu", iso2: "SO" },
    { land: "Spanien", hauptstadt: "Madrid", flag: "https://flagcdn.com/w320/es.png", kontinent: "Europa" , population: 46754778 , currency: "Euro", languages: ["Spanisch", "Katalanisch", "Baskisch", "Galicisch"], largestCity: "Madrid", iso2: "ES" },
    { land: "Sri Lanka", hauptstadt: "Sri Jayawardenepura Kotte", flag: "https://flagcdn.com/w320/lk.png", kontinent: "AsienOzeanien" , population: 21413249 , currency: "Sri-Lanka-Rupie", languages: ["Singhalesisch", "Tamil"], largestCity: "Colombo", iso2: "LK" },
    { land: "Südafrika", hauptstadt: ["Pretoria", "Kapstadt", "Bloemfontein"], flag: "https://flagcdn.com/w320/za.png", kontinent: "Afrika" , population: 59308690 , currency: "Südafrikanischer Rand", languages: ["Zulu", "Xhosa", "Afrikaans", "Englisch"], largestCity: "Johannesburg", iso2: "ZA" },
    { land: "Sudan", hauptstadt: "Khartum", flag: "https://flagcdn.com/w320/sd.png", kontinent: "Afrika" , population: 43849260 , currency: "Sudanesisches Pfund", languages: ["Arabisch", "Englisch"], largestCity: "Khartum", iso2: "SD" },
    { land: "Südsudan", hauptstadt: "Juba", flag: "https://flagcdn.com/w320/ss.png", kontinent: "Afrika" , population: 11193725 , currency: "Südsudanesisches Pfund", languages: ["Englisch"], largestCity: "Juba", iso2: "SS" },
    { land: "Südkorea", hauptstadt: "Seoul", flag: "https://flagcdn.com/w320/kr.png", kontinent: "AsienOzeanien" , population: 51780579 , currency: "Südkoreanischer Won", languages: ["Koreanisch"], largestCity: "Seoul", iso2: "KR" },
    { land: "Suriname", hauptstadt: "Paramaribo", flag: "https://flagcdn.com/w320/sr.png", kontinent: "Amerika" , population: 586632 , currency: "Suriname-Dollar", languages: ["Niederländisch"], largestCity: "Paramaribo", iso2: "SR" },
    { land: "Syrien", hauptstadt: "Damaskus", flag: "https://flagcdn.com/w320/sy.png", kontinent: "AsienOzeanien" , population: 17500657 , currency: "Syrisches Pfund", languages: ["Arabisch"], largestCity: "Damaskus", iso2: "SY" },

    { land: "Tadschikistan", hauptstadt: "Duschanbe", flag: "https://flagcdn.com/w320/tj.png", kontinent: "AsienOzeanien" , population: 9537681 , currency: "Somoni", languages: ["Tadschikisch"], largestCity: "Duschanbe", iso2: "TJ" }, 
    { land: "Tansania", hauptstadt: ["Dodoma", "Daressalaam"], flag: "https://flagcdn.com/w320/tz.png", kontinent: "Afrika" , population: 59734213 , currency: "Tansania-Schilling", languages: ["Swahili", "Englisch"], iso2: "TZ" },
    { land: "Thailand", hauptstadt: "Bangkok", flag: "https://flagcdn.com/w320/th.png", kontinent: "AsienOzeanien" , population: 69799978 , currency: "Baht", languages: ["Thai"], largestCity: "Bangkok", iso2: "TH" },
    { land: "Togo", hauptstadt: "Lomé", flag: "https://flagcdn.com/w320/tg.png", kontinent: "Afrika" , population: 827871 , currency: "Westafrikanischer CFA-Franc", languages: ["Französisch"], largestCity: "Lomé", iso2: "TG" },
    { land: "Tonga", hauptstadt: "Nukuʻalofa", flag: "https://flagcdn.com/w320/to.png", kontinent: "AsienOzeanien" , population: 103256 , currency: "Paʻanga", languages: ["Tongaisch", "Englisch"], largestCity: "Nukuʻalofa", iso2: "TO" },
    { land: "Trinidad und Tobago", hauptstadt: "Port of Spain", flag: "https://flagcdn.com/w320/tt.png", kontinent: "Amerika" , population: 1399487 , currency: "Trinidad-und-Tobago-Dollar", languages: ["Englisch"], largestCity: "Chaguanas", iso2: "TT" },
    { land: "Tschad", hauptstadt: "N’Djamena", flag: "https://flagcdn.com/w320/td.png", kontinent: "Afrika" , population: 16424000 , currency: "Zentralafrikanischer CFA-Franc", languages: ["Arabisch", "Französisch"], largestCity: "N’Djamena", iso2: "TD" },
    { land: "Tschechien", hauptstadt: "Prag", flag: "https://flagcdn.com/w320/cz.png", kontinent: "Europa" , population: 10708981 , currency: "Tschechische Krone", languages: ["Tschechisch"], largestCity: "Prag", iso2: "CZ" },
    { land: "Tunesien", hauptstadt: "Tunis", flag: "https://flagcdn.com/w320/tn.png", kontinent: "Afrika" , population: 11814576 , currency: "Tunesischer Dinar", languages: ["Arabisch"], largestCity: "Tunis", iso2: "TN" },
    { land: "Türkei", hauptstadt: "Ankara", flag: "https://flagcdn.com/w320/tr.png", kontinent: "AsienOzeanien" , population: 84339067 , currency: "Türkische Lira", languages: ["Türkisch"], largestCity: "Istanbul", iso2: "TR" },
    { land: "Turkmenistan", hauptstadt: "Aschgabat", flag: "https://flagcdn.com/w320/tm.png", kontinent: "AsienOzeanien" , population: 6031200 , currency: "Turkmenischer Manat", languages: ["Turkmenisch"], largestCity: "Aschgabat", iso2: "TM" },
    { land: "Tuvalu", hauptstadt: "Funafuti", flag: "https://flagcdn.com/w320/tv.png", kontinent:"AsienOzeanien" , population: 11792 , currency: "Australischer Dollar", languages: ["Tuvaluisch", "Englisch"], largestCity: "Funafuti", iso2: "TV" },

    { land: "Uganda", hauptstadt: "Kampala", flag: "https://flagcdn.com/w320/ug.png", kontinent: "Afrika" , population: 45741000 , currency: "Uganda-Schilling", languages: ["Englisch", "Swahili"], largestCity: "Kampala", iso2: "UG" },
    { land: "Ukraine", hauptstadt: "Kiew", flag: "https://flagcdn.com/w320/ua.png", kontinent: "Europa" , population: 44134693 , currency: "Ukrainische Hrywnja", languages: ["Ukrainisch"], largestCity: "Kiew", iso2: "UA" },
    { land: "Ungarn", hauptstadt: "Budapest", flag: "https://flagcdn.com/w320/hu.png", kontinent: "Europa" , population: 9772756 , currency: "Ungarischer Forint", languages: ["Ungarisch"], largestCity: "Budapest", iso2: "HU" },
    { land: "Uruguay", hauptstadt: "Montevideo", flag: "https://flagcdn.com/w320/uy.png", kontinent: "Amerika" , population: 3473727 , currency: "Uruguayischer Peso", languages: ["Spanisch"], largestCity: "Montevideo", iso2: "UY" },
    { land: "Usbekistan", hauptstadt: "Taschkent", flag: "https://flagcdn.com/w320/uz.png", kontinent: "AsienOzeanien" , population: 33469203 , currency: "Usbekischer Soʻm", languages: ["Usbekisch"], largestCity: "Taschkent", iso2: "UZ" },

    { land: "Vanuatu", hauptstadt: "Port Vila", flag: "https://flagcdn.com/w320/vu.png", kontinent: "AsienOzeanien" , population: 307145 , currency: "Vanuatu-Vatu", languages: ["Bislama", "Englisch", "Französisch"], largestCity: "Port Vila", iso2: "VU" },
    { land: "Vatikanstadt", hauptstadt: "Vatikanstadt", flag: "https://flagcdn.com/w320/va.png", kontinent: "Europa" , population: 825 , currency: "Euro", languages: ["Italienisch", "Latein"], largestCity: "Vatikanstadt", iso2: "VA" },
    { land: "Venezuela", hauptstadt: "Caracas", flag: "https://flagcdn.com/w320/ve.png", kontinent: "Amerika" , population: 28435940 , currency: "Venezolanischer Bolívar", languages: ["Spanisch"], largestCity: "Caracas", iso2: "VE" },
    { land: "Vereinigte Arabische Emirate", hauptstadt: "Abu Dhabi", flag: "https://flagcdn.com/w320/ae.png", kontinent: "AsienOzeanien" , population: 9890400 , currency: "VAE-Dirham", languages: ["Arabisch"], largestCity: "Dubai", iso2: "AE" },
    { land: "Vereinigte Staaten", hauptstadt: "Washington, D.C.", flag: "https://flagcdn.com/w320/us.png", kontinent: "Amerika" , population: 331002651 , currency: "US-Dollar", languages: ["Englisch"],largestCity: "New York", iso2: "US" },
    { land: "Vereinigtes Königreich", hauptstadt: "London", flag: "https://flagcdn.com/w320/gb.png", kontinent: "Europa" , population: 55980771 , currency: "Pfund Sterling", languages: ["Englisch"], largestCity: "London", iso2: "GB" },
    { land: "Vietnam", hauptstadt: "Hanoi", flag: "https://flagcdn.com/w320/vn.png", kontinent: "AsienOzeanien" , population: 97338966 , currency: "Vietnamesischer Dong", languages: ["Vietnamesisch"], largestCity: "Ho Chi Minh City", iso2: "VN" },

    { land: "Zentralafrikanische Republik", hauptstadt: "Bangui", flag: "https://flagcdn.com/w320/cf.png", kontinent: "Afrika" , population: 4829767 , currency: "Zentralafrikanischer CFA-Franc", languages: ["Französisch", "Sango"], largestCity: "Bangui", iso2: "CF" },
    { land: "Zypern", hauptstadt: "Nikosia", flag: "https://flagcdn.com/w320/cy.png", kontinent: "Europa" , population: 1185300 , currency: "Euro", languages: ["Griechisch", "Türkisch"], largestCity: "Nikosia", iso2: "CY" }
];

/* =========================
   GRUNDZUSTAND
========================= */

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

let worldGeoJsonData = null;

const STAT_KEY = "geoMasterStatsV4";
const ACCOUNT_KEY = "geoMasterAccountsV1";
const ACTIVE_ACCOUNT_KEY = "geoMasterActiveAccountV1";

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
    facts: "Fakten-Quiz",
    population: "Einwohner-Raten",
    outline: "Länderumriss",
    time: "Zeit-Challenge",
    lives: "Leben-Modus",
    weakness: "Schwächen üben"
};

const achievementDefinitions = [
    { id: "firstAnswer", title: "Erste Antwort", text: "Beantworte deine erste Frage", xp: 20, check: s => s.totalAnswered >= 1 },
    { id: "hundredCorrect", title: "Länder-Kenner", text: "100 richtige Antworten", xp: 80, check: s => s.totalCorrect >= 100 },
    { id: "fiveHundredCorrect", title: "Geografie-Profi", text: "500 richtige Antworten", xp: 200, check: s => s.totalCorrect >= 500 },
    { id: "combo10", title: "10er Combo", text: "10 richtige Antworten hintereinander", xp: 70, check: s => s.bestCombo >= 10 },
    { id: "europeMaster", title: "Europa-Meister", text: "Meistere viele Länder Europas", xp: 120, check: s => getContinentCorrect(s, "Europa") >= 50 },
    { id: "africaMaster", title: "Afrika-Meister", text: "Meistere viele Länder Afrikas", xp: 120, check: s => getContinentCorrect(s, "Afrika") >= 50 },
    { id: "americaMaster", title: "Amerika-Meister", text: "Meistere viele Länder Amerikas", xp: 120, check: s => getContinentCorrect(s, "Amerika") >= 50 },
    { id: "asiaMaster", title: "Asien/Ozeanien-Meister", text: "Meistere viele Länder aus Asien + Ozeanien", xp: 120, check: s => getContinentCorrect(s, "AsienOzeanien") >= 50 }
];

/* =========================
   ACCOUNTS
========================= */

function createId() {
    return "player_" + Date.now() + "_" + Math.random().toString(16).slice(2);
}

function loadAccounts() {
    const saved = localStorage.getItem(ACCOUNT_KEY);

    if (!saved) {
        const guest = { id: "guest", name: "Gast" };
        localStorage.setItem(ACCOUNT_KEY, JSON.stringify([guest]));
        localStorage.setItem(ACTIVE_ACCOUNT_KEY, "guest");
        return [guest];
    }

    try {
        const accounts = JSON.parse(saved);
        return Array.isArray(accounts) && accounts.length ? accounts : [{ id: "guest", name: "Gast" }];
    } catch {
        return [{ id: "guest", name: "Gast" }];
    }
}

function saveAccounts(accounts) {
    localStorage.setItem(ACCOUNT_KEY, JSON.stringify(accounts));
}

function getActiveAccountId() {
    return localStorage.getItem(ACTIVE_ACCOUNT_KEY) || "guest";
}

function getActiveAccount() {
    return loadAccounts().find(account => account.id === getActiveAccountId()) || { id: "guest", name: "Gast" };
}

function getAccountStatKey(accountId = getActiveAccountId()) {
    return STAT_KEY + "_" + accountId;
}

function createOrSwitchAccount() {
    const input = document.getElementById("accountNameInput");
    const name = input.value.trim();

    if (!name) {
        showToast("Bitte einen Namen eingeben.");
        return;
    }

    const accounts = loadAccounts();
    let account = accounts.find(item => item.name.toLowerCase() === name.toLowerCase());

    if (!account) {
        account = { id: createId(), name };
        accounts.push(account);
        saveAccounts(accounts);
    }

    localStorage.setItem(ACTIVE_ACCOUNT_KEY, account.id);

    input.value = "";
    showToast("Aktiver Account: " + account.name);

    renderAllStats();
    renderLeaderboard();
    renderCountryRanking();
}

/* =========================
   SPEICHER, XP, LEVEL
========================= */

function getEmptyStats() {
    return {
        xp: 0,
        level: 1,
        totalAnswered: 0,
        totalCorrect: 0,
        currentCombo: 0,
        bestCombo: 0,
        countryStats: {},
        modeStats: {},
        unlockedAchievements: [],
        records: {
            time30: 0,
            time60: 0,
            time120: 0,
            lives: 0
        }
    };
}

function loadStats() {
    const saved = localStorage.getItem(getAccountStatKey());

    if (!saved) return getEmptyStats();

    try {
        const parsed = JSON.parse(saved);
        const empty = getEmptyStats();

        return {
            ...empty,
            ...parsed,
            countryStats: parsed.countryStats || {},
            modeStats: parsed.modeStats || {},
            unlockedAchievements: parsed.unlockedAchievements || [],
            records: { ...empty.records, ...(parsed.records || {}) }
        };
    } catch {
        return getEmptyStats();
    }
}

function saveStats(stats) {
    localStorage.setItem(getAccountStatKey(), JSON.stringify(stats));
}

function xpNeededForNextLevel(level) {
    return level * 100;
}

function calculateLevel(totalXp) {
    let level = 1;
    let rest = totalXp;

    while (rest >= xpNeededForNextLevel(level)) {
        rest -= xpNeededForNextLevel(level);
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

/* =========================
   STATISTIK
========================= */

function getCountryStats(stats, country) {
    if (!stats.countryStats[country.land]) {
        stats.countryStats[country.land] = {
            richtig: 0,
            falsch: 0
        };
    }

    return stats.countryStats[country.land];
}

function recordAnswer(isCorrect, country, mode) {
    const stats = loadStats();

    if (!stats.modeStats[mode]) {
        stats.modeStats[mode] = {
            answered: 0,
            correct: 0
        };
    }

    const countryStats = getCountryStats(stats, country);

    countryStats[isCorrect ? "richtig" : "falsch"]++;
    stats.totalAnswered++;
    stats.modeStats[mode].answered++;

    if (isCorrect) {
        stats.totalCorrect++;
        stats.modeStats[mode].correct++;
        stats.currentCombo++;
        stats.bestCombo = Math.max(stats.bestCombo, stats.currentCombo);

        addXp(stats, 10, "Richtige Antwort");
        handleComboBonus(stats);
    } else {
        stats.currentCombo = 0;
    }

    checkAchievements(stats);
    saveStats(stats);
    renderAllStats();
}

function handleComboBonus(stats) {
    if (stats.currentCombo === 5) {
        addXp(stats, 15, "5er Combo");
        showCombo(5);
    }

    if (stats.currentCombo === 10) {
        addXp(stats, 35, "10er Combo");
        showCombo(10);
    }

    if (stats.currentCombo > 0 && stats.currentCombo % 20 === 0) {
        addXp(stats, 70, stats.currentCombo + "er Combo");
        showCombo(stats.currentCombo);
    }
}

function getLearningStatus(stats, country) {
    const item = stats.countryStats[country.land];

    if (!item || item.richtig + item.falsch === 0) return "neu";

    const total = item.richtig + item.falsch;
    const quote = item.richtig / total;

    if (item.richtig >= 5 && quote >= 0.8) return "gut";
    if (quote >= 0.5) return "mittel";
    return "schlecht";
}

function getContinentCorrect(stats, continent) {
    return countries
        .filter(country => country.kontinent === continent)
        .reduce((sum, country) => sum + (stats.countryStats[country.land]?.richtig || 0), 0);
}

function checkAchievements(stats) {
    achievementDefinitions.forEach(item => {
        if (stats.unlockedAchievements.includes(item.id)) return;

        if (item.check(stats)) {
            stats.unlockedAchievements.push(item.id);
            addXp(stats, item.xp, "Erfolg: " + item.title);
            showToast("🏆 Erfolg freigeschaltet: " + item.title);
        }
    });
}

/* =========================
   QUIZ-LOGIK
========================= */

function getCountriesForContinent(continent) {
    return continent === "Welt"
        ? countries
        : countries.filter(country => country.kontinent === continent);
}

function buildWeightedList(list) {
    const stats = loadStats();
    const weighted = [];

    list.forEach(country => {
        const status = getLearningStatus(stats, country);
        let weight = 2;

        if (status === "neu") weight = 4;
        if (status === "mittel") weight = 3;
        if (status === "schlecht") weight = 7;
        if (status === "gut") weight = 1;

        for (let i = 0; i < weight; i++) {
            weighted.push(country);
        }
    });

    return shuffle(weighted);
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

    closeMenu();
    setView("quizView");
    setupRoundUi();

    if (roundType === "time") startTimeRound();
    if (roundType === "lives") startLivesRound();

    nextQuestion();
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
        selectedAnswerType = "choice";
    }

    if (selectedMode === "capitalCountryToCapital") {
        return {
            prompt: "Welche Hauptstadt hat " + country.land + "?",
            image: country.flag,
            outline: false,
            correctAnswers: capitalAnswers(country),
            choices: makeChoices(country, "capital"),
            answerMode: selectedAnswerType
        };
    }

    if (selectedMode === "capitalCapitalToCountry") {
        return {
            prompt: "Zu welchem Land gehört " + capitalText(country) + "?",
            image: "",
            outline: false,
            correctAnswers: [country.land],
            choices: makeChoices(country, "country"),
            answerMode: selectedAnswerType
        };
    }

    if (selectedMode === "flagCountry") {
        return {
            prompt: "Zu welchem Land gehört diese Flagge?",
            image: country.flag,
            outline: false,
            correctAnswers: [country.land],
            choices: makeChoices(country, "country"),
            answerMode: selectedAnswerType
        };
    }

    if (selectedMode === "countryFlag") {
        return {
            prompt: "Welche Flagge gehört zu " + country.land + "?",
            image: "",
            outline: false,
            correctAnswers: [country.flag],
            choices: makeChoices(country, "flag"),
            answerMode: "choice"
        };
    }

    if (selectedMode === "facts") return createFactQuestion(country);
    if (selectedMode === "population") return createPopulationQuestion(country);
    if (selectedMode === "outline") return createOutlineQuestion(country);

    return createQuestion(country);
}

function createFactQuestion(country) {
    const facts = [];

    if (country.currency) {
        facts.push({
            prompt: "Welche Währung verwendet " + country.land + "?",
            correct: country.currency,
            field: "currency"
        });
    }

    if (country.largestCity) {
        facts.push({
            prompt: "Was ist die größte Stadt von " + country.land + "?",
            correct: country.largestCity,
            field: "largestCity"
        });
    }

    if (country.languages && country.languages.length) {
        facts.push({
            prompt: "Welche Sprache wird in " + country.land + " gesprochen?",
            correct: Array.isArray(country.languages) ? country.languages[0] : country.languages,
            field: "languages"
        });
    }

    if (country.area) {
        facts.push({
            prompt: "Wie groß ist " + country.land + " ungefähr?",
            correct: formatNumber(country.area) + " km²",
            field: "area"
        });
    }

    if (facts.length === 0) {
        return {
            prompt: "Für " + country.land + " fehlen noch Fakten. Welches Land ist gesucht?",
            image: country.flag,
            outline: false,
            correctAnswers: [country.land],
            choices: makeChoices(country, "country"),
            answerMode: "choice"
        };
    }

    const fact = facts[Math.floor(Math.random() * facts.length)];

    return {
        prompt: fact.prompt,
        image: country.flag,
        outline: false,
        correctAnswers: [fact.correct],
        choices: makeFactChoices(fact.correct, fact.field),
        answerMode: "choice"
    };
}

function createPopulationQuestion(country) {
    return {
        prompt: "Wie viele Einwohner hat " + country.land + " ungefähr?",
        image: country.flag,
        outline: false,
        correctAnswers: [formatNumber(country.population)],
        choices: makePopulationChoices(country.population),
        answerMode: "choice"
    };
}

function createOutlineQuestion(country) {
    return {
        prompt: "Welches Land ist dieser Umriss?",
        image: "",
        outline: true,
        correctAnswers: [country.land],
        choices: makeChoices(country, "country"),
        answerMode: selectedAnswerType
    };
}

function makeChoices(correctCountry, type) {
    const pool = getCountriesForContinent(selectedContinent);
    const choices = [choiceForCountry(correctCountry, type)];

    while (choices.length < 4 && pool.length > choices.length) {
        const random = pool[Math.floor(Math.random() * pool.length)];
        const option = choiceForCountry(random, type);

        if (!choices.some(choice => choice.value === option.value)) {
            choices.push(option);
        }
    }

    return shuffle(choices);
}

function choiceForCountry(country, type) {
    if (type === "capital") return { label: capitalText(country), value: capitalText(country), type };
    if (type === "flag") return { label: country.land, value: country.flag, type };
    return { label: country.land, value: country.land, type: "country" };
}

function makeFactChoices(correct, field) {
    const values = countries
        .map(country => {
            if (field === "area" && country.area) return formatNumber(country.area) + " km²";

            const value = country[field];
            if (Array.isArray(value)) return value[0];
            return value;
        })
        .filter(Boolean);

    const choices = [{ label: correct, value: correct, type: "fact" }];

    while (choices.length < 4 && values.length > choices.length) {
        const value = values[Math.floor(Math.random() * values.length)];

        if (!choices.some(choice => choice.value === value)) {
            choices.push({ label: value, value, type: "fact" });
        }
    }

    return shuffle(choices);
}

function makePopulationChoices(correctPopulation) {
    const correctLabel = formatNumber(correctPopulation);

    const pool = countries
        .filter(country => country.population && country.population !== correctPopulation)
        .map(country => ({
            label: formatNumber(country.population),
            value: formatNumber(country.population),
            type: "population"
        }));

    const choices = [
        {
            label: correctLabel,
            value: correctLabel,
            type: "population"
        }
    ];

    shuffle(pool).forEach(option => {
        if (choices.length < 4 && !choices.some(choice => choice.value === option.value)) {
            choices.push(option);
        }
    });

    while (choices.length < 4) {
        const fake = Math.max(1, Math.round((correctPopulation || 10000000) * (0.4 + Math.random() * 2.2)));
        const label = formatNumber(fake);

        if (!choices.some(choice => choice.value === label)) {
            choices.push({
                label,
                value: label,
                type: "population"
            });
        }
    }

    return shuffle(choices);
}

/* =========================
   QUIZ-ANZEIGE
========================= */

function renderQuestion(question) {
    const flag = document.getElementById("flag");
    const answer = document.getElementById("answer");
    const choices = document.getElementById("choices");
    const result = document.getElementById("result");
    const outlineWrap = document.getElementById("outlineWrap");

    document.getElementById("country").innerText = question.prompt;

    result.innerText = "";
    result.className = "";

    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("checkBtn").style.display = question.answerMode === "input" ? "block" : "none";

    answer.value = "";
    answer.style.display = question.answerMode === "input" ? "block" : "none";

    flag.src = question.image || "";
    flag.style.display = question.image ? "block" : "none";

    outlineWrap.style.display = question.outline ? "block" : "none";
    if (question.outline) drawCountryOutline(current);

    choices.innerHTML = "";
    choices.style.display = question.answerMode === "choice" ? "grid" : "none";

    if (question.answerMode === "choice") {
        question.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "choiceBtn";

            if (choice.type === "flag") {
                btn.innerHTML = `<img src="${choice.value}" alt="Flagge" style="width:70px;border-radius:10px;vertical-align:middle;margin-right:12px;"> ${choice.label}`;
            } else {
                btn.innerText = choice.label;
            }

            btn.onclick = () => checkChoice(choice);
            choices.appendChild(btn);
        });
    }
}

function checkAnswer() {
    if (answered) return;

    const user = normalizeAnswer(document.getElementById("answer").value);
    const isCorrect = currentQuestion.correctAnswers.some(answer => normalizeAnswer(answer) === user);

    finishQuestion(isCorrect);
}

function checkChoice(choice) {
    if (answered) return;

    const isCorrect = currentQuestion.correctAnswers.some(answer => {
        return answer === choice.value || answer === choice.label;
    });

    document.querySelectorAll(".choiceBtn").forEach(btn => {
        btn.disabled = true;

        const text = btn.innerText.trim();

        if (currentQuestion.correctAnswers.includes(text)) {
            btn.classList.add("correctChoice");
        } else if (text.includes(choice.label)) {
            btn.classList.add("wrongChoice");
        }

        if (choice.type === "flag" && btn.innerHTML.includes(current.flag)) {
            btn.classList.add("correctChoice");
        }
    });

    finishQuestion(isCorrect);
}

function finishQuestion(isCorrect) {
    answered = true;

    if (isCorrect) {
        correctInRound++;
        setResult("✅ Richtig!", "correct");
    } else {
        wrongInRound++;
        setResult("❌ Richtig: " + currentQuestion.correctAnswers[0], "wrong");

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

function setResult(text, className) {
    const result = document.getElementById("result");
    result.innerText = text;
    result.className = className;
}

function next() {
    nextQuestion();
}

/* =========================
   UMRISS-MODUS MIT ISO2
========================= */

async function loadWorldGeoJson() {
    if (worldGeoJsonData) return worldGeoJsonData;

    const response = await fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson");
    worldGeoJsonData = await response.json();

    return worldGeoJsonData;
}

function getCountryShapeFromWorldGeoJson(country) {
    if (!worldGeoJsonData || !country.iso2) return null;

    return worldGeoJsonData.features.find(feature => {
        const props = feature.properties || {};

        const iso =
            props.ISO_A2 ||
            props.iso_a2 ||
            props["ISO3166-1-Alpha-2"] ||
            props["Alpha-2"] ||
            props.ISO_A2_EH;

        return String(iso).toUpperCase() === String(country.iso2).toUpperCase();
    });
}

async function drawCountryOutline(country) {
    const canvas = document.getElementById("outlineCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "17px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Lade Umriss...", canvas.width / 2, canvas.height / 2);

    try {
        await loadWorldGeoJson();

        const feature = country.geojson
            ? { geometry: country.geojson }
            : getCountryShapeFromWorldGeoJson(country);

        const shape = feature?.geometry;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!shape) {
            ctx.fillStyle = "#94a3b8";
            ctx.fillText("Umriss nicht gefunden.", canvas.width / 2, 130);
            ctx.fillText("Prüfe iso2 bei " + country.land + ".", canvas.width / 2, 158);
            return;
        }

        const polygons = normalizeGeoJsonPolygons(shape);
        const points = polygons.flat();

        if (points.length === 0) return;

        const bounds = getPointBounds(points);
        const scale = Math.min(
            (canvas.width - 70) / (bounds.maxLng - bounds.minLng || 1),
            (canvas.height - 70) / (bounds.maxLat - bounds.minLat || 1)
        );

        ctx.strokeStyle = "#38bdf8";
        ctx.fillStyle = "rgba(56,189,248,0.22)";
        ctx.lineWidth = 2;

        polygons.forEach(polygon => {
            ctx.beginPath();

            polygon.forEach((point, index) => {
                const projected = projectGeoPoint(point, bounds, scale, canvas);

                if (index === 0) ctx.moveTo(projected.x, projected.y);
                else ctx.lineTo(projected.x, projected.y);
            });

            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        });

        drawCapitalDot(ctx, canvas, country, bounds, scale);
    } catch {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fca5a5";
        ctx.fillText("GeoJSON konnte nicht geladen werden.", canvas.width / 2, 145);
    }
}

function normalizeGeoJsonPolygons(shape) {
    if (shape.type === "Polygon") {
        return shape.coordinates.map(ring => ring.map(point => ({
            lng: point[0],
            lat: point[1]
        })));
    }

    if (shape.type === "MultiPolygon") {
        return shape.coordinates.flatMap(polygon => {
            return polygon.map(ring => ring.map(point => ({
                lng: point[0],
                lat: point[1]
            })));
        });
    }

    return [];
}

function projectGeoPoint(point, bounds, scale, canvas) {
    return {
        x: 35 + (point.lng - bounds.minLng) * scale,
        y: canvas.height - 35 - (point.lat - bounds.minLat) * scale
    };
}

function getPointBounds(points) {
    return {
        minLat: Math.min(...points.map(p => p.lat)),
        maxLat: Math.max(...points.map(p => p.lat)),
        minLng: Math.min(...points.map(p => p.lng)),
        maxLng: Math.max(...points.map(p => p.lng))
    };
}

function drawCapitalDot(ctx, canvas, country, bounds, scale) {
    if (!country.capitalLat || !country.capitalLng || !bounds || !scale) return;

    const projected = projectGeoPoint(
        { lat: country.capitalLat, lng: country.capitalLng },
        bounds,
        scale,
        canvas
    );

    ctx.fillStyle = "#facc15";
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, 6, 0, Math.PI * 2);
    ctx.fill();
}

/* =========================
   ZEIT UND LEBEN
========================= */

function setupRoundUi() {
    document.getElementById("lifeBar").style.display = roundType === "lives" ? "flex" : "none";
    document.getElementById("timerBar").style.display = roundType === "time" ? "block" : "none";

    document.getElementById("modeLabel").innerText =
        roundType === "time" ? "⏱️ Zeit-Challenge" :
        roundType === "lives" ? "❤️ Leben-Modus" :
        modeLabels[selectedMode];

    if (roundType === "lives") renderLives();
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
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
}

function updateTimerUi() {
    setText("timerText", timeLeft + "s");
    setWidth("timerFill", Math.max(0, (timeLeft / timeLimit) * 100));
}

function startLivesRound() {
    livesLeft = 5;
    renderLives();
}

function renderLives() {
    document.getElementById("lifeBar").innerHTML = "❤️".repeat(livesLeft);
}

function finishRound() {
    stopTimer();

    const stats = loadStats();
    const score = correctInRound;

    if (roundType === "time") {
        const key = "time" + timeLimit;
        stats.records[key] = Math.max(stats.records[key] || 0, score);
    }

    if (roundType === "lives") {
        stats.records.lives = Math.max(stats.records.lives || 0, score);
    }

    saveStats(stats);

    document.getElementById("roundResultStats").innerHTML = `
        <article><span>Richtig</span><strong>${correctInRound}</strong></article>
        <article><span>Falsch</span><strong>${wrongInRound}</strong></article>
        <article><span>Punkte</span><strong>${score}</strong></article>
        <article><span>Rekord</span><strong>${getCurrentRecord(stats)}</strong></article>
    `;

    setView("resultView");
}

/* =========================
   NAVIGATION
========================= */

function setView(viewId) {
    stopTimer();

    document.querySelectorAll(".view").forEach(view => view.classList.remove("activeView"));
    document.getElementById(viewId).classList.add("activeView");
}

function showHome() {
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

function showLeaderboard() {
    closeMenu();
    setView("leaderboardView");
    renderLeaderboard();
    renderCountryRanking();
}

function openMenu() {
    document.getElementById("menuOverlay").style.display = "block";
    backToModeStep();
}

function closeMenu() {
    const overlay = document.getElementById("menuOverlay");
    if (overlay) overlay.style.display = "none";
}

function showMenuStep(id) {
    document.querySelectorAll(".menuStep").forEach(step => step.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function backToModeStep() {
    showMenuStep("menuStepMode");
}

function backToAnswerStep() {
    showMenuStep(roundType === "time" ? "menuStepTime" : "menuStepAnswer");
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

    if (["countryFlag", "facts", "population"].includes(mode)) {
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

/* =========================
   LEXIKON
========================= */

function renderLexicon() {
    const search = normalizeAnswer(document.getElementById("lexiconSearch")?.value || "");
    const filter = document.getElementById("lexiconFilter")?.value || "Welt";
    const box = document.getElementById("lexiconList");
    const stats = loadStats();

    if (!box) return;

    const list = countries.filter(country => {
        return normalizeAnswer(country.land).includes(search) &&
            (filter === "Welt" || country.kontinent === filter);
    });

    box.innerHTML = list.map(country => {
        const item = stats.countryStats[country.land] || { richtig: 0, falsch: 0 };
        const status = getLearningStatus(stats, country);

        return `
            <button class="lexiconCard" onclick="showCountryDetail('${escapeText(country.land)}')">
                <img src="${cleanUrl(country.flag)}" alt="Flagge von ${country.land}">
                <div>
                    <h3>${country.land}</h3>
                    <p>${capitalText(country)} · ${continentNames[country.kontinent]}</p>
                    <p>Status: ${status} · ✅ ${item.richtig} · ❌ ${item.falsch}</p>
                </div>
            </button>
        `;
    }).join("");
}

function showCountryDetail(countryName) {
    const country = countries.find(item => item.land === countryName);
    if (!country) return;

    const stats = loadStats();
    const item = stats.countryStats[country.land] || { richtig: 0, falsch: 0 };
    const total = item.richtig + item.falsch;
    const accuracy = total === 0 ? 0 : Math.round((item.richtig / total) * 100);

    document.getElementById("countryDetailContent").innerHTML = `
        <div class="countryDetailHero">
            <img src="${cleanUrl(country.flag)}" alt="Flagge von ${country.land}">
            <div>
                <h2>${country.land}</h2>
                <p>Hauptstadt: ${capitalText(country)}</p>
                <p>Kontinent: ${continentNames[country.kontinent]}</p>
            </div>
        </div>

        <div class="countryInfoGrid">
            ${infoItem("Einwohnerzahl", formatNumber(country.population))}
            ${infoItem("Fläche", country.area ? formatNumber(country.area) + " km²" : "")}
            ${infoItem("Währung", country.currency)}
            ${infoItem("Sprache(n)", Array.isArray(country.languages) ? country.languages.join(", ") : country.languages)}
            ${infoItem("Größte Stadt", country.largestCity)}
        </div>

        <div class="detailStatsGrid">
            <article class="detailStat"><span>Richtig</span><strong>${item.richtig}</strong></article>
            <article class="detailStat"><span>Falsch</span><strong>${item.falsch}</strong></article>
            <article class="detailStat"><span>Trefferquote</span><strong>${accuracy}%</strong></article>
        </div>

        <button class="primaryAction" onclick="practiceCountry('${escapeText(country.land)}')">
            Dieses Land üben
        </button>
    `;

    setView("countryDetailView");
}

function infoItem(label, value) {
    return `
        <article class="infoItem">
            <span>${label}</span>
            <strong>${value || "Noch nicht eingetragen"}</strong>
        </article>
    `;
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

function startWeaknessQuiz() {
    const stats = loadStats();

    const list = countries
        .filter(country => (stats.countryStats[country.land]?.falsch || 0) > 0)
        .sort((a, b) => (stats.countryStats[b.land]?.falsch || 0) - (stats.countryStats[a.land]?.falsch || 0))
        .slice(0, 20);

    if (list.length === 0) {
        showToast("Du hast noch keine gespeicherten Schwächen.");
        return;
    }

    selectedMode = "flagCountry";
    selectedAnswerType = "choice";
    selectedContinent = "Welt";
    roundType = "normal";
    quizCountries = buildWeightedList(list);
    currentIndex = 0;

    setView("quizView");
    setupRoundUi();
    nextQuestion();
}

/* =========================
   SPIELER-RANGLISTE
========================= */

function getAccountStats(accountId) {
    const saved = localStorage.getItem(getAccountStatKey(accountId));

    if (!saved) return getEmptyStats();

    try {
        return {
            ...getEmptyStats(),
            ...JSON.parse(saved)
        };
    } catch {
        return getEmptyStats();
    }
}

function getLeaderboardValue(stats, type) {
    if (type === "totalCorrect") return stats.totalCorrect || 0;
    if (type === "xp") return stats.xp || 0;
    if (type === "level") return stats.level || 1;
    if (type === "bestCombo") return stats.bestCombo || 0;

    if (["Europa", "Afrika", "Amerika", "AsienOzeanien"].includes(type)) {
        return getContinentCorrect(stats, type);
    }

    return 0;
}

function getLeaderboardLabel(type) {
    if (type === "totalCorrect") return "richtige Antworten";
    if (type === "xp") return "XP";
    if (type === "level") return "Level";
    if (type === "bestCombo") return "Combo";
    return "richtige Antworten";
}

function renderLeaderboard() {
    const box = document.getElementById("leaderboardList");
    const type = document.getElementById("leaderboardType")?.value || "totalCorrect";
    const activeText = document.getElementById("activeAccountText");

    const active = getActiveAccount();

    if (activeText) activeText.innerText = "Aktiver Account: " + active.name;
    if (!box) return;

    const rows = loadAccounts()
        .map(account => {
            const stats = getAccountStats(account.id);

            return {
                name: account.name,
                value: getLeaderboardValue(stats, type)
            };
        })
        .sort((a, b) => b.value - a.value);

    box.innerHTML = rows.map((row, index) => `
        <div class="leaderboardRow">
            <div class="leaderboardRank">${index + 1}</div>
            <div class="leaderboardName">${row.name}</div>
            <div class="leaderboardValue">${row.value} ${getLeaderboardLabel(type)}</div>
        </div>
    `).join("");
}

/* =========================
   LÄNDER-RANGLISTE
========================= */

function renderCountryRanking() {
    const box = document.getElementById("countryRankingList");
    if (!box) return;

    const type = document.getElementById("countryRankingType")?.value || "population";
    const continent = document.getElementById("countryRankingContinent")?.value || "Welt";

    let list = countries.filter(country => {
        return continent === "Welt" || country.kontinent === continent;
    });

    list = list.filter(country => country[type] !== undefined && country[type] !== null && country[type] !== "");

    list.sort((a, b) => {
        if (type === "population" || type === "area") {
            return Number(b[type]) - Number(a[type]);
        }

        return String(a[type]).localeCompare(String(b[type]), "de");
    });

    box.innerHTML = list.map((country, index) => `
        <div class="leaderboardRow">
            <div class="leaderboardRank">${index + 1}</div>
            <div class="leaderboardName">
                <img src="${cleanUrl(country.flag)}" alt="" style="width:34px;border-radius:6px;margin-right:8px;vertical-align:middle;">
                ${country.land}
            </div>
            <div class="leaderboardValue">${formatCountryRankingValue(country, type)}</div>
        </div>
    `).join("");
}

function formatCountryRankingValue(country, type) {
    if (type === "population") return formatNumber(country.population) + " Einwohner";
    if (type === "area") return formatNumber(country.area) + " km²";
    if (type === "largestCity") return country.largestCity || "-";
    if (type === "currency") return country.currency || "-";

    return "-";
}

/* =========================
   PROFIL UND STATS RENDERN
========================= */

function renderAllStats() {
    const stats = loadStats();

    renderHome(stats);
    renderProfile(stats);
    renderWeaknesses(stats);
}

function renderHome(stats) {
    setText("homeLevel", stats.level);
    setText("homeXp", stats.xp);
    setText("homeCorrect", stats.totalCorrect);
    setText("homeCombo", stats.currentCombo);
}

function renderProfile(stats) {
    const accuracy = stats.totalAnswered === 0 ? 0 : Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
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
    setText("profileBestCombo", stats.bestCombo);
    setText("comboDisplay", stats.currentCombo);

    setWidth("xpFill", percent);
    setWidth("profileXpFill", percent);

    const progressList = document.getElementById("continentProgressList");
    if (progressList) {
        progressList.innerHTML = Object.keys(continentNames).map(continent => {
            const list = countries.filter(country => country.kontinent === continent);
            const correct = getContinentCorrect(stats, continent);
            const possible = Math.max(1, list.length * 5);
            const progress = Math.min(100, Math.round((correct / possible) * 100));

            return `
                <div class="progressRow">
                    <div class="progressTop">
                        <strong>${continentNames[continent]}</strong>
                        <span>${correct} richtige Antworten</span>
                    </div>
                    <div class="progressBar">
                        <div class="progressFill" style="width:${progress}%"></div>
                    </div>
                    <small>${progress}% Fortschritt</small>
                </div>
            `;
        }).join("");
    }
}

function renderWeaknesses(stats) {
    const box = document.getElementById("weaknessList");
    if (!box) return;

    const list = countries
        .map(country => ({ country, falsch: stats.countryStats[country.land]?.falsch || 0 }))
        .filter(item => item.falsch > 0)
        .sort((a, b) => b.falsch - a.falsch)
        .slice(0, 10);

    box.innerHTML = list.length
        ? list.map(item => `<div class="weaknessItem"><span>${item.country.land}</span><span>${item.falsch} Fehler</span></div>`).join("")
        : "<p>Noch keine Schwächen gespeichert.</p>";
}

/* =========================
   HILFSFUNKTIONEN
========================= */

function resetStats() {
    if (!confirm("Möchtest du wirklich alle Statistiken für diesen Account löschen?")) return;

    localStorage.removeItem(getAccountStatKey());
    renderAllStats();
    renderLeaderboard();
    showToast("Statistiken zurückgesetzt");
}

function getCurrentRecord(stats) {
    if (roundType === "time") return stats.records["time" + timeLimit] || 0;
    if (roundType === "lives") return stats.records.lives || 0;
    return correctInRound;
}

function capitalText(country) {
    return Array.isArray(country.hauptstadt) ? country.hauptstadt.join(", ") : country.hauptstadt;
}

function capitalAnswers(country) {
    return Array.isArray(country.hauptstadt) ? country.hauptstadt : [country.hauptstadt];
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

function formatNumber(value) {
    if (value === undefined || value === null || value === "") {
        return "Noch nicht eingetragen";
    }

    if (typeof value === "number") {
        return value.toLocaleString("de-DE");
    }

    return value;
}

function cleanUrl(url) {
    const text = String(url || "");

    const markdownMatch = text.match(/\((https?:\/\/[^)]+)\)/);
    if (markdownMatch) return markdownMatch[1];

    return text;
}

function escapeText(text) {
    return String(text).replaceAll("'", "\\'");
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.innerText = value;
}

function setWidth(id, percent) {
    const element = document.getElementById(id);
    if (element) element.style.width = percent + "%";
}

function showToast(text) {
    const stack = document.getElementById("toastStack");
    if (!stack) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = text;

    stack.appendChild(toast);

    setTimeout(() => toast.remove(), 2600);
}

function showLevelUp(level) {
    const overlay = document.getElementById("levelUpOverlay");
    const text = document.getElementById("levelUpText");

    if (!overlay) return;

    text.innerText = "Level " + level + " erreicht";
    overlay.style.display = "grid";

    setTimeout(() => overlay.style.display = "none", 2200);
}

function showCombo(combo) {
    const overlay = document.getElementById("comboOverlay");
    const text = document.getElementById("comboOverlayText");

    if (!overlay) return;

    text.innerText = combo + " COMBO!";
    overlay.style.display = "grid";

    setTimeout(() => overlay.style.display = "none", 1100);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

document.addEventListener("keydown", event => {
    const quizVisible = document.getElementById("quizView")?.classList.contains("activeView");

    if (event.key === "Enter" && quizVisible && selectedAnswerType === "input" && !answered) {
        checkAnswer();
    } else if (event.key === "Enter" && quizVisible && answered) {
        next();
    }
});

loadAccounts();
renderAllStats();
showHome();

function showLeaderboard() {
    closeMenu();
    setView("leaderboardView");
    renderLeaderboard();
    renderCountryRanking();
}

function renderLeaderboard() {
    const box = document.getElementById("leaderboardList");
    if (!box) return;

    const type = document.getElementById("leaderboardType")?.value || "totalCorrect";
    const activeText = document.getElementById("activeAccountText");

    const active = getActiveAccount();

    if (activeText) {
        activeText.innerText = "Aktiver Account: " + active.name;
    }

    const rows = loadAccounts()
        .map(account => {
            const stats = getAccountStats(account.id);

            return {
                name: account.name,
                value: getLeaderboardValue(stats, type)
            };
        })
        .sort((a, b) => b.value - a.value);

    box.innerHTML = rows.map((row, index) => `
        <div class="leaderboardRow">
            <div class="leaderboardRank">${index + 1}</div>
            <div class="leaderboardName">${row.name}</div>
            <div class="leaderboardValue">${row.value} ${getLeaderboardLabel(type)}</div>
        </div>
    `).join("");
}