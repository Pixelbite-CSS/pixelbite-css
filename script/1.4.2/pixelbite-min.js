const class_library=[["c","color"],["p","padding"],["o","opacity"],["pt","padding-top"],["pb","padding-bottom"],["pl","padding-left"],["pr","padding-right"],["m","margin"],["mt","margin-top"],["mb","margin-bottom"],["ml","margin-left"],["mr","margin-right"],["g","gap"],["ar","aspect-ratio"],["d","display"],["w","width"],["h","height"],["maxW","max-width"],["maxH","max-height"],["minW","min-width"],["minH","min-height"],["border","border"],["b","border"],["bleft","border-left"],["bright","border-right"],["btop","border-top"],["bbottom","border-bottom"],["br","border-radius"],["bg","background"],["ta","text-align"],["fs","font-size"],["fw","font-weight"],["td","text-decoration"],["fill","fill"],["of","overflow"],["ofx","overflow-x"],["ofy","overflow-y"],["flex","flex"],["flexDirection","flex-direction"],["flexWrap","flex-wrap"],["flexItems","align-items"],["flexContent","align-content"],["flexJustifyContent","justify-content"],["flexAlignItems","align-items"],["gridColumns","grid-template-columns"],["gridRows","grid-template-rows"],["shadow","box-shadow"],["top","top"],["bottom","bottom"],["left","left"],["right","right"],["zIndex","z-index"],];let aliasClasses=[];const addAliasClass=(e,t)=>{let s=t.split(" ");aliasClasses.push([e,s])},styleColor=e=>getComputedStyle(document.documentElement).getPropertyValue(e),color_library=()=>[["primary",styleColor("--primary-color")],["secondary",styleColor("--secondary-color")],["success",styleColor("--success-color")],["danger",styleColor("--danger-color")],["warning",styleColor("--warning-color")],["info",styleColor("--info-color")],];let color_library_hsl=[["white",0,"0%"],["black",0,"0%"],["red",0,"100%"],["orange",36,"100%"],["yellow",59,"100%"],["greenyellow",74,"100%"],["green",108,"100%"],["teal",154,"100%"],["cyan",182,"100%"],["blue",235,"100%"],["purple",275,"100%"],["pink",300,"100%"],];const addColorHsl=(e,t,s)=>{s.toString().includes("%")?color_library_hsl.push([e,t,s]):color_library_hsl.push([e,t,s+"%"])};let loremIpsum=["Hercle, species primus!","Indexs volare, tanquam emeritis nix.","Festus bulla vix locuss barcas est.","Domuss sunt equisos de flavum cedrium.","A falsis, diatria emeritis clabulare.","Medicinas sunt menss de pius nuclear vexatum iacere.","Verpas sunt plasmators de brevis pes.","Placidus, alter nuclear vexatum iaceres patienter talem de nobilis, noster cursus.","Ubi est azureus castor?","Cum abnoba resistere, omnes hilotaees examinare pius, emeritis poetaes.","Ubi est bi-color lanista?","Stellas prarere in ostravia!","Ausus peregrinationess, tanquam talis mensa.","Est teres deus, cesaris.","Est dexter animalis, cesaris.","Finis albus eleates est.","Bassus consilium interdum captiss accentor est.","Fuga noceres, tanquam castus racana.","Contencio, byssus, et tata.","Sunt guttuses gratia ferox, velox decores.","Elogium mirabilis abactor est.","Nunquam magicae mensa.","Pol, a bene historia.","Ubi est raptus acipenser?","Mensa, ratione, et vortex.","Rumors cantare!","Decors volare!","Fluctuss peregrinationes!","Cum agripeta credere, omnes silvaes transferre domesticus, clemens sectames.","Lapsus de domesticus era, manifestum lanista!","Cur clabulare ridetis?","Deuss observare, tanquam albus domus.","A falsis, planeta rusticus visus.","Primus seculas ducunt ad orgia.","Pol, a bene guttus, magnum glos!","Ortum satis ducunt ad fortis candidatus.","Neuter, alter fraticinidas unus attrahendam de teres, fortis rumor.","Devatios ortum!","Cadunt saepe ducunt ad primus imber.","Ubi est camerarius species?","Vae.","Genetrixs sunt adiurators de nobilis exemplar.",],darkmode=!1;window.addEventListener("load",async()=>{await checkLoremIpsum(),darkmode=getCookie("darkmode"),checkChange(0),slideshowGenerator()});const changeThemeMode=async()=>{"0"===darkmode?(darkmode="1",setCookie("darkmode","1",365)):(darkmode="0",setCookie("darkmode","0",365))},checkLoaders=async()=>{let e=document.getElementsByClassName("loader");if(e.length>0)for(let t=0;t<e.length;t++)e[t].style.opacity="0",await sleep(400),e[t].style.display="none",e[t].remove()},checkLoremIpsum=()=>{let e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++)e[t].classList.forEach(s=>{let a=s.split("-");if("loremIpsum"===a[0])for(let l=0;l<a[1];l++)e[t].innerHTML+=randomFromArray(loremIpsum)+" "})};let changeDelay=500;const changeClassUpdateDelay=e=>{changeDelay=e},checkChange=async e=>{await sleep(changeDelay),await classGenerator(),e<=0&&checkLoaders(),await checkChange(e+1)},sleep=e=>new Promise(t=>setTimeout(t,e)),randomFromArray=e=>e[Math.floor(Math.random()*e.length)];window.onload=()=>{console.log("%cThank you for using PixelbiteCSS :)","font-size:18px;font-weight:bold"),console.log("%cMore information or documentation can be found on our GitHub\nhttps://github.com/Pixelbite-CSS","font-weight:bold"),addSignature(),classGenerator()};const classGenerator=()=>{let e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++){let s=e[t];aliasClassReplace(s),s.classList.forEach(e=>{for(let t=0;t<class_library.length;t++){let a=e.split("-"),l=a[1]+"";if(l.includes("_")&&(a[1]=l.replace("_","-")),"1"===darkmode&&a[0].includes("dark:")&&(a[0]=a[0].replace("dark:","")),a[0].includes("foreach:")){a[0]=a[0].replace("foreach:","");let r=s.getElementsByTagName("*");if(a[0]===class_library[t][0])for(let o=0;o<r.length;o++)r[o].style.cssText+=class_library[t][1]+":"+classSplitToString(a,1)+";";else for(let i=0;i<r.length;i++)r[i].classList.add(e)}a[0]===class_library[t][0]&&(s.style.cssText+=class_library[t][1]+":"+classSplitToString(a,1)+";")}}),updateSearchbars(),generateFloatInput(s)}},generateFloatInput=e=>{if(e.classList.contains("floatInput")&&e.getElementsByClassName("input")&&e.getElementsByClassName("label")&&e.getElementsByClassName("input")&&e.getElementsByTagName("label")){let t=e.getElementsByTagName("input")[0],s=e.getElementsByTagName("label")[0];t.value?s.classList.add("inputhastext"):s.classList.contains("inputhastext")&&s.classList.remove("inputhastext")}},aliasClassReplace=e=>{let t=e.classList;for(let s=0;s<t.length;s++)for(let a=0;a<aliasClasses.length;a++)if(aliasClasses[a][0]===t[s])for(let l=0;l<aliasClasses[a][1].length;l++)e.classList.add(aliasClasses[a][1][l])},classSplitToString=(e,t)=>{if(!e)return"";{let s=color_library(),a="";for(let l=t;l<e.length;l++){for(let r=0;r<s.length;r++)e[l]===s[r][0]&&(e[l]=s[r][1]);for(let o=0;o<color_library_hsl.length;o++)e[l].includes(color_library_hsl[o][0])&&(e[l]=e[l].replace(color_library_hsl[o][0],"hsl("+color_library_hsl[o][1]+","+color_library_hsl[o][2]+","),e[l]+="%)");a+=e[l]+" "}return a.trim()}},addSignature=()=>{let e=document.createComment("This site is created via PixelbiteCSS (https://github.com/Pixelbite-CSS)");document.body.appendChild(e)},href=e=>{window.location.href=e},toggleElement=e=>{let t=document.getElementsByClassName(e);for(let s=0;s<t.length;s++)t[s].classList.contains("hidden")&&(t[s].style.position="absolute",t[s].classList.remove("hidden")),"absolute"!==t[s].style.position?(t[s].style.position="absolute",t[s].style.top="-999999999px"):(t[s].style.position="relative",t[s].style.top="0px")},changeVariable=(e,t)=>{document.documentElement.style.setProperty(e,t)},slideshowGenerator=()=>{let e=document.getElementsByClassName("slideshow");if(e.length>0)for(let t=0;t<e.length;t++){let s=e[t],a=s.getElementsByClassName("slide");slideshowSlide(0,s,a)}},slideshowSlide=async(e,t,s)=>{for(let a=0;a<s.length;a++)s[a].style.left=(-a+e)*100+"%";e>=s.length-1&&(e=-1),await sleep(5e3),await slideshowSlide(e+1,t,s)},setCookie=(e,t,s)=>{let a=new Date;a.setTime(a.getTime()+864e5*s);let l="expires="+a.toUTCString();document.cookie=e+"="+t+";"+l+";path=/"},getCookie=e=>{let t=e+"=",s=decodeURIComponent(document.cookie).split(";");for(let a=0;a<s.length;a++){let l=s[a];for(;" "===l.charAt(0);)l=l.substring(1);if(0===l.indexOf(t))return l.substring(t.length,l.length)}return""},updateSearchbars=()=>{let e=document.getElementsByClassName("searchbar");for(let t=0;t<e.length;t++){let s=e[t].getElementsByClassName("search")[0].value.toLowerCase(),a=e[t].getElementsByClassName("search-values")[0].getElementsByTagName("div");for(let l=0;l<a.length;l++)a[l].innerText.toLowerCase().includes(s)&&s?a[l].style.display="flex":a[l].style.display="none"}};