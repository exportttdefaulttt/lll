const countries = [
    {code:'JP',name:'Japan',flag:'🇯🇵',region:'Asia',subregion:'Eastern Asia',capital:'Tokyo',population:123294513,area:377975,languages:'Japanese',currency:'Japanese yen (JPY)',domain:'.jp',calling:'+81',drive:'Left',timezone:'UTC+9',borders:[],native:'日本',continent:'Asia',description:'A seamless blend of ancient tradition and forward-looking design, from quiet Kyoto temples to the neon rhythm of Tokyo.'},
    {code:'FR',name:'France',flag:'🇫🇷',region:'Europe',subregion:'Western Europe',capital:'Paris',population:68373433,area:551695,languages:'French',currency:'Euro (EUR)',domain:'.fr',calling:'+33',drive:'Right',timezone:'UTC+1',borders:['ES','IT','CH','DE','BE','LU'],native:'France',continent:'Europe',description:'Art, architecture, exceptional food and landscapes that stretch from Atlantic beaches to the Alps.'},
    {code:'BR',name:'Brazil',flag:'🇧🇷',region:'Americas',subregion:'South America',capital:'Brasília',population:216422446,area:8515767,languages:'Portuguese',currency:'Brazilian real (BRL)',domain:'.br',calling:'+55',drive:'Right',timezone:'UTC−3 to −5',borders:['AR','BO','CO','GY','PY','PE','SR','UY','VE'],native:'Brasil',continent:'South America',description:'A country of extraordinary biodiversity, vibrant music and culture, with the Amazon rainforest at its heart.'},
    {code:'ZA',name:'South Africa',flag:'🇿🇦',region:'Africa',subregion:'Southern Africa',capital:'Pretoria',population:60414495,area:1221037,languages:'Zulu, Xhosa, Afrikaans, English + 8',currency:'South African rand (ZAR)',domain:'.za',calling:'+27',drive:'Left',timezone:'UTC+2',borders:['BW','LS','MZ','NA','SZ','ZW'],native:'Suid-Afrika',continent:'Africa',description:'A remarkable meeting of cultures, coastlines, mountains and wildlife, often called the Rainbow Nation.'},
    {code:'AU',name:'Australia',flag:'🇦🇺',region:'Oceania',subregion:'Australia and New Zealand',capital:'Canberra',population:26439111,area:7692024,languages:'English',currency:'Australian dollar (AUD)',domain:'.au',calling:'+61',drive:'Left',timezone:'UTC+8 to +10:30',borders:[],native:'Australia',continent:'Oceania',description:'An island continent known for ancient landscapes, unique wildlife, sunlit cities and a vast, beautiful outback.'},
    {code:'DE',name:'Germany',flag:'🇩🇪',region:'Europe',subregion:'Western Europe',capital:'Berlin',population:83294633,area:357114,languages:'German',currency:'Euro (EUR)',domain:'.de',calling:'+49',drive:'Right',timezone:'UTC+1',borders:['AT','BE','CH','CZ','DK','FR','LU','NL','PL'],native:'Deutschland',continent:'Europe',description:'Historic towns, contemporary culture and inventive engineering meet in a country of forests, rivers and lively cities.'},
    {code:'IN',name:'India',flag:'🇮🇳',region:'Asia',subregion:'Southern Asia',capital:'New Delhi',population:1428627663,area:3287590,languages:'Hindi, English and others',currency:'Indian rupee (INR)',domain:'.in',calling:'+91',drive:'Left',timezone:'UTC+5:30',borders:['BD','BT','CN','MM','NP','PK'],native:'भारत',continent:'Asia',description:'A richly diverse tapestry of languages, cuisines and landscapes, home to ancient sites and energetic modern cities.'},
    {code:'CA',name:'Canada',flag:'🇨🇦',region:'Americas',subregion:'North America',capital:'Ottawa',population:40097761,area:9984670,languages:'English, French',currency:'Canadian dollar (CAD)',domain:'.ca',calling:'+1',drive:'Right',timezone:'UTC−3:30 to −8',borders:['US'],native:'Canada',continent:'North America',description:'Vast wilderness, sparkling lakes and welcoming multicultural cities span the world’s second-largest country by area.'},
    {code:'IT',name:'Italy',flag:'🇮🇹',region:'Europe',subregion:'Southern Europe',capital:'Rome',population:58870762,area:301336,languages:'Italian',currency:'Euro (EUR)',domain:'.it',calling:'+39',drive:'Right',timezone:'UTC+1',borders:['AT','FR','SM','SI','CH','VA'],native:'Italia',continent:'Europe',description:'A living open-air museum of Roman history, Renaissance masterpieces, dramatic coastlines and regional cuisine.'},
    {code:'EG',name:'Egypt',flag:'🇪🇬',region:'Africa',subregion:'Northern Africa',capital:'Cairo',population:112716598,area:1002450,languages:'Arabic',currency:'Egyptian pound (EGP)',domain:'.eg',calling:'+20',drive:'Right',timezone:'UTC+2',borders:['IL','LY','SD'],native:'مصر',continent:'Africa',description:'The Nile, monumental ancient history and the sweeping Sahara shape a culture spanning millennia.'},
    {code:'MX',name:'Mexico',flag:'🇲🇽',region:'Americas',subregion:'North America',capital:'Mexico City',population:128455567,area:1964375,languages:'Spanish and indigenous languages',currency:'Mexican peso (MXN)',domain:'.mx',calling:'+52',drive:'Right',timezone:'UTC−8 to −5',borders:['BZ','GT','US'],native:'México',continent:'North America',description:'Colorful traditions, remarkable archaeology, vibrant cities and a cuisine celebrated around the world.'},
    {code:'KR',name:'South Korea',flag:'🇰🇷',region:'Asia',subregion:'Eastern Asia',capital:'Seoul',population:51784059,area:100210,languages:'Korean',currency:'South Korean won (KRW)',domain:'.kr',calling:'+82',drive:'Right',timezone:'UTC+9',borders:[],native:'대한민국',continent:'Asia',description:'K-pop, cutting-edge technology and centuries-old palaces share space in a fast-moving cultural powerhouse.'},
    {code:'ES',name:'Spain',flag:'🇪🇸',region:'Europe',subregion:'Southern Europe',capital:'Madrid',population:48373336,area:505992,languages:'Spanish and regional languages',currency:'Euro (EUR)',domain:'.es',calling:'+34',drive:'Right',timezone:'UTC+1',borders:['AD','FR','GI','PT'],native:'España',continent:'Europe',description:'Sun-drenched plazas, distinctive regional identities, architectural treasures and a famously social food culture.'},
    {code:'NO',name:'Norway',flag:'🇳🇴',region:'Europe',subregion:'Northern Europe',capital:'Oslo',population:5503090,area:323802,languages:'Norwegian',currency:'Norwegian krone (NOK)',domain:'.no',calling:'+47',drive:'Right',timezone:'UTC+1',borders:['FI','SE','RU'],native:'Norge',continent:'Europe',description:'Dramatic fjords, northern lights and a deep connection to nature define this Scandinavian country.'},
    {code:'KE',name:'Kenya',flag:'🇰🇪',region:'Africa',subregion:'Eastern Africa',capital:'Nairobi',population:55100586,area:580367,languages:'Swahili, English',currency:'Kenyan shilling (KES)',domain:'.ke',calling:'+254',drive:'Left',timezone:'UTC+3',borders:['ET','SO','SS','TZ','UG'],native:'Kenya',continent:'Africa',description:'From savannah wildlife to Indian Ocean beaches, Kenya is rich in natural beauty and cultural heritage.'},
    {code:'AR',name:'Argentina',flag:'🇦🇷',region:'Americas',subregion:'South America',capital:'Buenos Aires',population:45773884,area:2780400,languages:'Spanish',currency:'Argentine peso (ARS)',domain:'.ar',calling:'+54',drive:'Right',timezone:'UTC−3',borders:['BO','BR','CL','PY','UY'],native:'Argentina',continent:'South America',description:'Tango-filled streets, Patagonian peaks and the wide Pampas give Argentina a striking range of experiences.'},
    {code:'CN',name:'China',flag:'🇨🇳',region:'Asia',subregion:'Eastern Asia',capital:'Beijing',population:1410710000,area:9596961,languages:'Standard Chinese (Mandarin)',currency:'Renminbi (CNY)',domain:'.cn',calling:'+86',drive:'Right',timezone:'UTC+8',borders:['AF','BT','IN','KZ','KG','LA','MN','MM','NP','PK','RU','TJ','VN'],native:'中国',continent:'Asia',description:'One of the world’s oldest continuous civilizations, with extraordinary landscapes and a rapidly evolving urban culture.'},
    {code:'NZ',name:'New Zealand',flag:'🇳🇿',region:'Oceania',subregion:'Australia and New Zealand',capital:'Wellington',population:5228100,area:268838,languages:'English, Māori, NZ Sign Language',currency:'New Zealand dollar (NZD)',domain:'.nz',calling:'+64',drive:'Left',timezone:'UTC+12',borders:[],native:'Aotearoa',continent:'Oceania',description:'Emerald hills, volcanic peaks and a strong Māori heritage make these islands an outdoor lover’s paradise.'},
    {code:'PT',name:'Portugal',flag:'🇵🇹',region:'Europe',subregion:'Southern Europe',capital:'Lisbon',population:10425292,area:92090,languages:'Portuguese',currency:'Euro (EUR)',domain:'.pt',calling:'+351',drive:'Right',timezone:'UTC+0',borders:['ES'],native:'Portugal',continent:'Europe',description:'Atlantic light, tiled streets, soulful music and a rich seafaring history give Portugal its distinctive charm.'},
    {code:'TH',name:'Thailand',flag:'🇹🇭',region:'Asia',subregion:'South-Eastern Asia',capital:'Bangkok',population:71801279,area:513120,languages:'Thai',currency:'Thai baht (THB)',domain:'.th',calling:'+66',drive:'Left',timezone:'UTC+7',borders:['KH','LA','MY','MM'],native:'ประเทศไทย',continent:'Asia',description:'Golden temples, bustling markets, tropical islands and fragrant cuisine make Thailand endlessly inviting.'},
    {code:'CH',name:'Switzerland',flag:'🇨🇭',region:'Europe',subregion:'Western Europe',capital:'Bern',population:8796669,area:41284,languages:'German, French, Italian, Romansh',currency:'Swiss franc (CHF)',domain:'.ch',calling:'+41',drive:'Right',timezone:'UTC+1',borders:['AT','FR','DE','IT','LI'],native:'Schweiz',continent:'Europe',description:'Alpine scenery, precision craft and multilingual cities create a distinctive blend of nature and innovation.'},
    {code:'NG',name:'Nigeria',flag:'🇳🇬',region:'Africa',subregion:'Western Africa',capital:'Abuja',population:223804632,area:923768,languages:'English',currency:'Nigerian naira (NGN)',domain:'.ng',calling:'+234',drive:'Right',timezone:'UTC+1',borders:['BJ','CM','TD','NE'],native:'Nigeria',continent:'Africa',description:'A dynamic cultural giant with influential music, film, literature and a remarkable diversity of languages.'},
    {code:'US',name:'United States',flag:'🇺🇸',region:'Americas',subregion:'North America',capital:'Washington, D.C.',population:339996563,area:9372610,languages:'English (widely spoken)',currency:'US dollar (USD)',domain:'.us',calling:'+1',drive:'Right',timezone:'UTC−5 to −10',borders:['CA','MX'],native:'United States',continent:'North America',description:'A vast range of landscapes and cultures, from iconic cities and national parks to small-town main streets.'},
    {code:'GR',name:'Greece',flag:'🇬🇷',region:'Europe',subregion:'Southern Europe',capital:'Athens',population:10341277,area:131990,languages:'Greek',currency:'Euro (EUR)',domain:'.gr',calling:'+30',drive:'Right',timezone:'UTC+2',borders:['AL','BG','TR','MK'],native:'Ελλάδα',continent:'Europe',description:'The birthplace of democracy and philosophy, with whitewashed islands, ancient ruins and sparkling seas.'},
    {code:'ID',name:'Indonesia',flag:'🇮🇩',region:'Asia',subregion:'South-Eastern Asia',capital:'Jakarta',population:277534122,area:1904569,languages:'Indonesian',currency:'Indonesian rupiah (IDR)',domain:'.id',calling:'+62',drive:'Left',timezone:'UTC+7 to +9',borders:['MY','PG','TL'],native:'Indonesia',continent:'Asia',description:'An immense archipelago of volcanic landscapes, coral reefs and hundreds of distinct cultural communities.'},
    {code:'IS',name:'Iceland',flag:'🇮🇸',region:'Europe',subregion:'Northern Europe',capital:'Reykjavík',population:393349,area:103000,languages:'Icelandic',currency:'Icelandic króna (ISK)',domain:'.is',calling:'+354',drive:'Right',timezone:'UTC+0',borders:[],native:'Ísland',continent:'Europe',description:'Glaciers, geysers, lava fields and dramatic coastlines create a landscape unlike anywhere else.'},
    {code:'MA',name:'Morocco',flag:'🇲🇦',region:'Africa',subregion:'Northern Africa',capital:'Rabat',population:37840044,area:446550,languages:'Arabic, Amazigh',currency:'Moroccan dirham (MAD)',domain:'.ma',calling:'+212',drive:'Right',timezone:'UTC+1',borders:['DZ','EH'],native:'المغرب',continent:'Africa',description:'A crossroads of African, Arab and Mediterranean influences, with lively souks and Atlas Mountain villages.'},
    {code:'CL',name:'Chile',flag:'🇨🇱',region:'Americas',subregion:'South America',capital:'Santiago',population:19629590,area:756102,languages:'Spanish',currency:'Chilean peso (CLP)',domain:'.cl',calling:'+56',drive:'Right',timezone:'UTC−4',borders:['AR','BO','PE'],native:'Chile',continent:'South America',description:'A long ribbon of land spanning the Atacama Desert, fertile valleys, fjords and the Andes.'},
    {code:'SG',name:'Singapore',flag:'🇸🇬',region:'Asia',subregion:'South-Eastern Asia',capital:'Singapore',population:6014723,area:728,languages:'English, Malay, Mandarin, Tamil',currency:'Singapore dollar (SGD)',domain:'.sg',calling:'+65',drive:'Left',timezone:'UTC+8',borders:[],native:'新加坡',continent:'Asia',description:'A compact, green global city where futuristic architecture, diverse food and heritage districts thrive together.'}
];

const byCode = Object.fromEntries(countries.map(c => [c.code, c]));

const state = {
    region: 'Europe',
    query: '',
    page: 1,
    size: 9,
    sort: 'name',
    selected: null,
    current: null,
    neighborPage: 1,
    neighborSize: 6,
    favorites: new Set(),
    favoritesOnly: false,
};

const $ = s => document.querySelector(s);

const $$ = s => [...document.querySelectorAll(s)];

const fmt = n => new Intl.NumberFormat('en-US').format(n);

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}[c]));

function icon(name) {
    const paths = {
        pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8v6M23 11h-6"/>',
        area:' <path d="M4 4h6v6H4zM14 14h6v6h-6zM14 4h6M17 4v6M4 14v6h6M4 17h6"/>',
        arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
        search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>'
    };
    
    return `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            ${paths[name] || paths.pin}
        </svg>
    `;
}

function filtered() {
    let list = countries.filter(c => (state.region === 'All' || c.region === state.region) &&
        (!state.query || (c.name + ' ' + c.subregion + ' ' + c.capital).toLowerCase().includes(state.query.toLowerCase())) &&
        (!state.favoritesOnly || state.favorites.has(c.code)));

    if (state.sort === 'name') {
        list.sort((a, b)=> a.name.localeCompare(b.name));
    } else {
        list.sort((a, b)=> b[state.sort] - a[state.sort]);
    }
        
    return list;
}

function card(c) {
    return `
        <article class="country-card ${state.selected === c.code ? 'selected' : ''}" data-code="${c.code}" tabindex="0" aria-label="Открыть ${esc(c.name)}">
            <div class="card-top">
                <div class="flag">
                    ${c.flag}
                </div>
                <span class="alpha">
                    ${c.code}
                </span>
            </div>
            <h3>
                ${esc(c.name)}
            </h3>
            <div class="subregion">
                ${esc(c.subregion)}
            </div>
            <div class="card-meta">
                ${icon('pin')} <span>Capital</span><strong>${esc(c.capital)}</strong>
            </div>
        </article>
    `;
}

function renderGrid() {
    const list = filtered();
    const pages = Math.max(1, Math.ceil(list.length / state.size));

    state.page = Math.min(state.page, pages);

    const start = (state.page - 1) * state.size;

    $('#listTitle').textContent = state.favoritesOnly ? 
        'Saved places' : state.region === 'All' ?
        'All countries' : state.region + ' countries';
    
    $('#resultCount').textContent = `Showing ${list.length ? start + 1 : 0}–${Math.min(start + state.size, list.length)} of ${list.length} countries`;
    
    $('#countryGrid').innerHTML = list.length ? list.slice(start, start + state.size).map(card).join('') : `
        <div class="empty-state">
            ${icon('search')}
            <h3>No countries found</h3>
            <p>Try another name or choose a different region.</p>
        </div>`;
        
    let pg = '';
    
    pg += `<button class="page-btn" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''} aria-label="Предыдущая страница">‹</button>`;
    
    for (let i = 1; i <= pages; i++) {
        if (pages > 5 && i > 2 && i<pages-1&&Math.abs(i-state.page)>1){if(i===3||i===pages-2)pg+='<span style="color:var(--muted);padding:0 2px">…</span>';continue}pg+=`<button class="page-btn ${i===state.page?'active':''}" data-page="${i}">${i}</button>`}pg+=`<button class="page-btn" data-page="${state.page+1}" ${state.page===pages?'disabled':''} aria-label="Следующая страница">›</button>`;$('#pagination').innerHTML=pg;$$('.region-btn').forEach(b=>b.classList.toggle('active',b.dataset.region===state.region));$$('.region-nav').forEach(b=>b.classList.toggle('active',b.dataset.region===state.region));$('#favCount').textContent=String(state.favorites.size).padStart(2,'0')
}

function detailHtml(c) {
    return `
        <div class="selected-head">
            <div class="flag">
                ${c.flag}
            </div>
            <div>
                <h3>${esc(c.name)}</h3>
                <p>${esc(c.native)} · ${c.code}</p>
            </div>
        </div>
        <div class="detail-list">
            <div class="detail-item">
                <span>Capital</span><strong>${esc(c.capital)}</strong>
            </div>
            <div class="detail-item">
                <span>Region</span><strong>${esc(c.region)}</strong>
            </div>
            <div class="detail-item">
                <span>Population</span><strong>${fmt(c.population)}</strong>
            </div>
            <div class="detail-item">
                <span>Language</span><strong>${esc(c.languages)}</strong>
            </div>
            <div class="detail-item">
                <span>Currency</span><strong>${esc(c.currency)}</strong>
            </div>
        </div>
        <button class="detail-link" id="moreInfoBtn">
            Explore country <span>${icon('arrow')}</span>
        </button>
    `;
}

function selectCountry(code) {
    const c = byCode[code];
    
    if (!c) return;
    
    state.selected = code;
    
    $('#selectedContent').innerHTML = detailHtml(c);
    renderGrid();
    $('#moreInfoBtn').addEventListener('click', () => showCountry(code));
}

function renderSuggestions(q) {
    const list = countries.filter(c => !q || (c.name + ' ' + c.code + ' ' + c.capital).toLowerCase().includes(q.toLowerCase())).slice(0, 8);

    $('#suggestionsInner').innerHTML = list.map(c => `
        <button class="suggestion" data-pick="${c.code}">
            <span class="flag">${c.flag}</span>
            <span>${esc(c.name)}<small>${esc(c.capital)}</small></span>
            <span class="alpha">${c.code}</span>
        </button>
    `).join('') || '<p style="font-size:11px;color:var(--muted);padding:8px">No matches found</p>';
    
    $('#suggestions').classList.toggle('open', Boolean(q));
}

function showCountry(code) {
    const c = byCode[code];
    
    if (!c) return;
    
    state.current = code;
    state.neighborPage = 1;
    state.favoritesOnly = false;
    
    $('#homePage').classList.add('hidden');
    $('#countryPage').classList.add('visible');
    $$('[data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav === 'home'));
    renderCountryPage();
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

function renderCountryPage() {
    const c = byCode[state.current];

    if (!c) return;

    const neighborList = (c.borders || []).map(code => byCode[code]).filter(Boolean);
    const max = Math.max(1, Math.ceil(neighborList.length / state.neighborSize));

    state.neighborPage = Math.min(state.neighborPage, max);
    const slice = neighborList.slice((state.neighborPage - 1) * state.neighborSize, state.neighborPage * state.neighborSize);
    const tiles = [
        ['Population', fmt(c.population), 'people'],
        ['Area', fmt(c.area) + ' km²', 'square kilometres'],
        ['Capital', c.capital, 'capital city']
    ];

    $('#countryDetails').innerHTML = `
        <div class="country-hero">
            <div>
                <div class="hero-label">
                    Country profile · ${esc(c.region)}
                </div>
                <h1>
                    ${esc(c.name)}
                </h1>
                <p>${esc(c.subregion)} · ${esc(c.continent)}</p>
                <span class="hero-code">ISO 3166 · ${c.code}</span>
            </div>
            <div class="hero-flag">
                ${c.flag}
            </div>
        </div>
        <div class="detail-cards">
            ${tiles.map(t => `<div class="info-tile"><span>${t[0]}</span><strong>${t[1]}</strong><small>${t[2]}</small></div>`).join('')}
        </div>
        <div class="more-grid">
            <section class="panel data-panel">
                <h2>Essential details</h2>
                <div class="detail-list">
                    <div class="detail-item">
                        <span>Official / native name</span><strong>${esc(c.native)}</strong>
                    </div>
                    <div class="detail-item">
                        <span>Languages</span><strong>${esc(c.languages)}</strong>
                    </div>
                    <div class="detail-item">
                        <span>Currency</span><strong>${esc(c.currency)}</strong>
                    </div>
                    <div class="detail-item">
                        <span>Internet domain</span><strong>${esc(c.domain)}</strong>
                    </div>
                    <div class="detail-item">
                        <span>Calling code</span><strong>${esc(c.calling)}</strong>
                    </div>
                </div>
            </section>
            <section class="panel data-panel">
                <h2>At a glance</h2>
                <div class="detail-list">
                    <div class="detail-item">
                        <span>Region</span><strong>${esc(c.region)}</strong>
                    </div>
                    <div class="detail-item">
                        <span>Subregion</span><strong>${esc(c.subregion)}</strong>
                    </div>
                    <div class="detail-item">
                        <span>Driving side</span><strong>${esc(c.drive)}</strong>
                    </div>
                    <div class="detail-item">
                        <span>Time zone</span><strong>${esc(c.timezone)}</strong>
                    </div>
                    <div class="detail-item">
                        <span>Alpha-2 code</span><strong>${c.code}</strong>
                    </div>
                </div>
            </section>
        </div>
        <section class="panel" style="margin-bottom:22px">
            <div class="eyebrow">A little context</div>
            <h2 style="font-size:16px;margin:0 0 9px">The story of ${esc(c.name)}</h2>
            <p style="font-size:12px;line-height:1.8;color:var(--muted);margin:0">${esc(c.description)}</p>
        </section>
        <section>
            <div class="neighbors-head">
                <div>
                    <h2>Countries nearby</h2>
                    <p>${neighborList.length ? `${neighborList.length} land neighbours of ${esc(c.name)}` : 'This country has no land borders in this dataset.'}</p>
                </div>
                <span class="tiny-icon">${icon('area')}</span>
            </div>
            <div class="neighbors-grid">
                ${slice.length ? slice.map(n => `
                    <article class="neighbor-card" data-neighbor="${n.code}" tabindex="0">
                        <div class="flag">${n.flag}</div>
                        <div style="min-width:0">
                            <strong>${esc(n.name)}</strong><small>${n.code} · ${esc(n.region)}</small>
                        </div>
                    </article>`).join('') : '<div class="empty-state" style="padding:28px">' + icon('area') + '<h3>Ocean horizons</h3><p>No neighbouring countries listed here.</p></div>'}
            </div>
            <div class="neighbors-pager">
                ${Array.from({ length: max }, (_, i) => `<button class="page-btn ${i + 1 === state.neighborPage ? 'active' : ''}" data-neighbor-page="${i + 1}">${i + 1}</button>`).join('')}
            </div>
        </section>
    `;
}

function backHome() {
    state.current = null;
    
    $('#countryPage').classList.remove('visible');
    $('#homePage').classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth'});
}

function toast(msg) {
    const t = $('#toast');

    t.textContent = msg;
    t.classList.add('show');

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => t.classList.remove('show'), 2200);
}


$('#regionBar').addEventListener('click', e => {
    const b = e.target.closest('[data-region]');
    
    if(!b) return;

    state.region = b.dataset.region;
    state.favoritesOnly = false;
    state.page = 1;

    renderGrid();
});

$('.sidebar').addEventListener('click', e => {
    const r = e.target.closest('.region-nav');

    if(r) {
        state.region = r.dataset.region;
        state.favoritesOnly = false;
        state.page = 1;
        renderGrid();

        $('#sidebar').classList.remove('open');
        return;
    }
    
    const n = e.target.closest('[data-nav]');
    
    if(!n) return;
    
    if(n.dataset.nav === 'favorites') {
        state.favoritesOnly = !state.favoritesOnly;
        state.region = 'All';
        state.page = 1;
        backHome();
        renderGrid();
        toast(state.favoritesOnly ? 'Showing saved places' : 'Showing all countries');
    } else if (n.dataset.nav === 'random') {
        const c = countries[Math.floor(Math.random() * countries.length)];
        selectCountry(c.code);
        toast('Surprise discovery: ' + c.name);
    } else {
        backHome();
        state.favoritesOnly = false;
        renderGrid()
    }
});

$('#countryGrid').addEventListener('click', e => {
    const c = e.target.closest('[data-code]');
    
    if (c) {
        selectCountry(c.dataset.code);
    }
});

$('#countryGrid').addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-code]')) {
        e.preventDefault();
        selectCountry(e.target.dataset.code)
    }
});

$('#pagination').addEventListener('click', e => {
    const b = e.target.closest('[data-page]');

    if (!b || b.disabled) return;
    
    state.page = Number(b.dataset.page);
    renderGrid();
});

$('#pageSize').addEventListener('change', e => {
    state.size = Number(e.target.value);
    state.page = 1;
    renderGrid();
});

$('#sortSelect').addEventListener('change', e => {
    state.sort = e.target.value;
    renderGrid();
});

$('#sideSearch').addEventListener('input', e => renderSuggestions(e.target.value.trim()));

$('#sideSearch').addEventListener('focus', e => {
    if (e.target.value.trim()){
        renderSuggestions(e.target.value.trim());
    }
});

$('#suggestionsInner').addEventListener('click', e => {
    const b = e.target.closest('[data-pick]');

    if (!b) return;
    
    const c = byCode[b.dataset.pick];
    $('#sideSearch').value = c.name;
    $('#suggestions').classList.remove('open');
    selectCountry(c.code);
});

$('#backBtn').addEventListener('click', backHome);

$('#countryDetails').addEventListener('click', e => {
    const n = e.target.closest('[data-neighbor]');
    
    if (n) {
        showCountry(n.dataset.neighbor);
        return;
    }
    
    const p = e.target.closest('[data-neighbor-page]');
    
    if (p) {
        state.neighborPage = Number(p.dataset.neighborPage);
        renderCountryPage();
    }
});

$('#surpriseBtn').addEventListener('click', () => {
    const c = countries[Math.floor(Math.random() * countries.length)];
    selectCountry(c.code);
    toast('Surprise discovery: ' + c.name);
});

$('#themeBtn').addEventListener('click', () => {
    const dark = $('#app').dataset.theme !== 'dark';
    $('#app').dataset.theme = dark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    $('#app').style.setProperty('--site-background', dark ? '#0c1319' : '#f4f6f8');
    $('#app').style.setProperty('--site-background', dark ? '#0c1319' : '#f4f6f8');
    $('#app').style.setProperty('--site-on-background', dark ?'#e8eef2' : '#17232d');
    toast(dark ? 'Dark theme enabled' : 'Light theme enabled');
});


$('.brand').addEventListener('click', event => {
    event.preventDefault();
    backHome();
    state.favoritesOnly = false;
    state.query = '';
    state.page = 1;
    $('#sideSearch').value = '';
    renderGrid();
});

renderGrid();