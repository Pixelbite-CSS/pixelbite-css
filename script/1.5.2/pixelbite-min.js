const class_library=[["c","color"],["p","padding"],["pos","position"],["o","opacity"],["pt","padding-top"],["pb","padding-bottom"],["pl","padding-left"],["pr","padding-right"],["m","margin"],["mt","margin-top"],["mb","margin-bottom"],["ml","margin-left"],["mr","margin-right"],["g","gap"],["ar","aspect-ratio"],["d","display"],["w","width"],["h","height"],["maxW","max-width"],["maxH","max-height"],["minW","min-width"],["minH","min-height"],["border","border"],["b","border"],["bleft","border-left"],["bright","border-right"],["btop","border-top"],["bbottom","border-bottom"],["br","border-radius"],["bg","background"],["ta","text-align"],["ff","font-family"],["fs","font-size"],["fw","font-weight"],["td","text-decoration"],["fill","fill"],["of","overflow"],["ofx","overflow-x"],["ofy","overflow-y"],["flex","flex"],["flexDirection","flex-direction"],["flexWrap","flex-wrap"],["flexItems","align-items"],["flexContent","align-content"],["flexJustifyContent","justify-content"],["flexAlignItems","align-items"],["gridColumns","grid-template-columns"],["gridRows","grid-template-rows"],["shadow","box-shadow"],["top","top"],["bottom","bottom"],["left","left"],["right","right"],["ws","word-spacing"],["ls","letter-spacing"],["lh","line-height"],["zIndex","z-index"],],pb_getRootVariable=e=>getComputedStyle(document.documentElement).getPropertyValue(e).toString(),pb_putCustomFontIntoCSS=(e,t)=>{let a=document.createElement("style");a.appendChild(document.createTextNode("@font-face {font-family: "+e+"; src: "+t+";}")),document.head.appendChild(a)};var pixelbite={classes:class_library,theme:{variables:{primary:pb_getRootVariable("--primary-color").toString(),secondary:pb_getRootVariable("--secondary-color").toString(),danger:pb_getRootVariable("--danger-color").toString(),info:pb_getRootVariable("--info-color").toString(),warning:pb_getRootVariable("--warning-color").toString(),success:pb_getRootVariable("--success-color").toString(),fontPrimary:pb_getRootVariable("--font-family").toString(),fontMonospace:pb_getRootVariable("--font-mono-family").toString()},colors:{white:[0,"0%"],gray:[0,"0%"],black:[0,"0%"],red:[0,"100%"],orange:[36,"100%"],yellow:[59,"100%"],green:[108,"100%"],teal:[154,"100%"],cyan:[182,"100%"],blue:[235,"100%"],purple:[275,"100%"],pink:[300,"100%"]}},aliases:{},loremIpsum:["Hercle, species primus!","Indexs volare, tanquam emeritis nix.","Festus bulla vix locuss barcas est.","Domuss sunt equisos de flavum cedrium.","A falsis, diatria emeritis clabulare.","Medicinas sunt menss de pius nuclear vexatum iacere.","Verpas sunt plasmators de brevis pes.","Placidus, alter nuclear vexatum iaceres patienter talem de nobilis, noster cursus.","Ubi est azureus castor?","Cum abnoba resistere, omnes hilotaees examinare pius, emeritis poetaes.","Ubi est bi-color lanista?","Stellas prarere in ostravia!","Ausus peregrinationess, tanquam talis mensa.","Est teres deus, cesaris.","Est dexter animalis, cesaris.","Finis albus eleates est.","Bassus consilium interdum captiss accentor est.","Fuga noceres, tanquam castus racana.","Contencio, byssus, et tata.","Sunt guttuses gratia ferox, velox decores.","Elogium mirabilis abactor est.","Nunquam magicae mensa.","Pol, a bene historia.","Ubi est raptus acipenser?","Mensa, ratione, et vortex.","Rumors cantare!","Decors volare!","Fluctuss peregrinationes!","Cum agripeta credere, omnes silvaes transferre domesticus, clemens sectames.","Lapsus de domesticus era, manifestum lanista!","Cur clabulare ridetis?","Nam quis nulla.","Deuss observare, tanquam albus domus.","A falsis, planeta rusticus visus.","Primus seculas ducunt ad orgia.","Pol, a bene guttus, magnum glos!","Ortum satis ducunt ad fortis candidatus.","Neuter, alter fraticinidas unus attrahendam de teres, fortis rumor.","Devatios ortum!","Cadunt saepe ducunt ad primus imber.","Ubi est camerarius species?","Vae.","Genetrixs sunt adiurators de nobilis exemplar.","Nullam rhoncus aliquam metus.","Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.","Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.","In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.","Mauris suscipit.","Etiam sapien elit, consequat eget.","Etiam neque.","Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","Integer in sapien.","Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.","Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.","Duis condimentum augue id magna semper rutrum.","Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.","Jsi cool člověk.","Fusce aliquam vestibulum ipsum.","Aliquam erat volutpat.","Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.",],update:500,version:"1.5.2"};const pb_getObjectValues=e=>Object.entries(e),pb_setCustomComponents=()=>{pb_customComponentsCheck(document.getElementsByTagName("*"))},pb_customComponentsCheck=(e,t)=>{t||(t="");for(let a=0;a<e.length;a++){let l=e[a];if(l.tagName.toUpperCase().includes("COMPONENT")){let s=l.getAttributeNames(),r=l.getAttribute("path");r=r.startsWith("http://")||r.startsWith("https://")?l.getAttribute("path"):t+l.getAttribute("path"),pb_includeHtmlToAnElement(l,r,s)}}};function pb_replaceAll(e,t,a){return e.split(t).join(a)}const pb_customGithubMakrdown=e=>{let t=[{pattern:/^#{6}\s+(.*)$/gm,replacement:"<h6>$1</h6>"},{pattern:/^#{5}\s+(.*)$/gm,replacement:"<h5>$1</h5>"},{pattern:/^#{4}\s+(.*)$/gm,replacement:"<h4 class='mt-32px'>$1</h4>"},{pattern:/^#{3}\s+(.*)$/gm,replacement:"<h3>$1</h3>"},{pattern:/^#{2}\s+(.*)$/gm,replacement:"<h2>$1</h2>"},{pattern:/^#{1}\s+(.*)$/gm,replacement:"<h1>$1</h1>"},{pattern:/```([\s\S]*?)```/g,replacement:function(e,t){return"```"+(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"))+"```"}},{pattern:/^!~(.*?)$/gm,replacement:"<span class='highlight'>$1</span>"},{pattern:/^~~(.*?)$/gm,replacement:"<span>$1</span>"},{pattern:/~(.*?)~/g,replacement:'<code class="c-info">$1</code>'},{pattern:/^- \[(x| )\]\s+(.*)$/gm,replacement:'<li><input type="checkbox" $1> $2</li><ul>'},{pattern:/\*\*(.*)\*\*/gm,replacement:"<strong>$1</strong>"},{pattern:/__(.*)__/g,replacement:"<strong>$1</strong>"},{pattern:/\*(.*)\*/g,replacement:"<em>$1</em>"},{pattern:/_(.*)_/g,replacement:"<em>$1</em>"},{pattern:/^>\s+(.*)$/gm,replacement:"<blockquote>$1</blockquote>"},{pattern:/^- (.*)$/gm,replacement:"<li>$1</li>"},{pattern:/<\/li>\n<li>/g,replacement:"</li><li>"},{pattern:/<li>(.*)<\/li>/gm,replacement:"<ul><li>$1</li></ul>"},{pattern:/!\[(.*?)\]\((.*?)\)/gm,replacement:'<img src="$2" alt="$1">'},{pattern:/\[(.*?)\]\((.*?)\)/gm,replacement:'<a href="$2">$1</a>'},{pattern:/```([\w-]+)?\n([\s\S]*?)\n```/gm,replacement:'<pre class="numberedLines maxw-100% b-1px-solid-primary br-6px p-12px-16px" $1><code>$2</code></pre>'},{pattern:/`([^`]+)`/gm,replacement:'<code class="bg-rgba(128,128,128,.15) c-white50 fw-600 fs-12px p-2px-4px br-4px">$1</code>'},{pattern:/\n---\n/gm,replacement:"<hr>"},],a=e;return t.forEach(({pattern:e,replacement:t})=>{a=a.replace(e,t)}),a},pb_includeHtmlToAnElement=async(element,path,attributes)=>{path||(path="null");let relativePathSplit=path.split("/"),relativePath="";for(let i=0;i<relativePathSplit.length-1;i++)relativePath+=relativePathSplit[i]+"/";let componentRequest=new XMLHttpRequest;componentRequest.onreadystatechange=async function(){if(4===this.readyState){if(200===this.status){let response=this.responseText+"";for(let i=0;i<attributes.length;i++){let attribute=attributes[i];if(attribute.includes("[object]")){let object="",objectName=attribute.replace("[object]",""),objectPath=element.getAttribute(attribute),objectRequest=new XMLHttpRequest;for(objectRequest.onreadystatechange=function(){if(4===this.readyState&&200===this.status)try{object=JSON.parse(this.responseText)}catch(e){console.error('PixelBite: Your "'+objectName+'[object]" has syntax error.')}},objectRequest.open("GET",objectPath,!0),objectRequest.send();!object;)await pb_sleep(10);let regex=/\$\{for\(([\s\S]*?)\)\}/g,objectFors=response.match(regex);if(objectFors){for(let j=0;j<objectFors.length;j++)if(objectFors[j].includes("${for(")){let objectForSplit=objectFors[j].substring(6,objectFors[j].length-2).split("::"),string="";for(let k=0;k<eval(objectForSplit[0]);k++)string+=pb_replaceAll(objectForSplit[1],"[i]","["+k+"]");response=pb_replaceAll(response,objectFors[j],string)}}let objectStrings=response.match(/\${(.*?)}/g);if(objectStrings){for(let j=0;j<objectStrings.length;j++)if(objectStrings[j].includes(objectName)){let objectString=objectStrings[j].replace("${","").replace("}","");try{let value=eval(objectString);response=pb_replaceAll(response,objectStrings[j],value)}catch(error){response=pb_replaceAll(response,objectStrings[j],""),console.error('PixelBite: Cannot read property from "'+objectName+'[object]" (reading "'+objectStrings[j]+'"), please check if value in the object exists.')}}}}let attribute_syntax="${"+attributes[i]+"}";response.includes(attribute_syntax)&&(response=pb_replaceAll(response,attribute_syntax,element.getAttribute(attribute)),element.removeAttribute(attribute))}"github"===element.getAttribute("markdown")&&(response=pb_customGithubMakrdown(response)),element.innerHTML=response,element.getElementsByTagName("COMPONENT")&&pb_customComponentsCheck(element.getElementsByTagName("COMPONENT"),relativePath)}if(404===this.status){let toggleClass="toggle-"+pb_randomString(32),toggleClassMore="toggle-"+pb_randomString(32),detailsString="";for(let i=0;i<attributes.length;i++)detailsString+="["+attributes[i]+'="'+element.getAttribute(attributes[i]).replaceAll("<","&lt;")+'"], <br>';element.innerHTML='<div class="'+toggleClass+' fw-500 p-14px-20px bg-warning br-4px m-4px pr-48px"><code>Component not found [path='+path+']<br></code><code class="'+toggleClassMore+'" onclick="toggleElement(\''+toggleClassMore+'\')"> - see more details</code><code class="'+toggleClassMore+' hidden"><code onclick="toggleElement(\''+toggleClassMore+"')\">- see less details</code><br>"+detailsString+'</code><button class="close-x" onclick="toggleElement(\''+toggleClass+"')\"></button></div>"}}},componentRequest.open("GET",path,!0),componentRequest.send()};let darkmode=!1;window.addEventListener("load",async()=>{await pb_checkLoremIpsum(),darkmode=pb_getCookie("darkmode"),pb_checkChange(0),pb_setCustomComponents(),pb_slideshowGenerator()});const changeThemeMode=async()=>{"0"===darkmode?(darkmode="1",pb_setCookie("darkmode","1",365)):(darkmode="0",pb_setCookie("darkmode","0",365))},pb_checkLoaders=async()=>{let e=document.getElementsByClassName("loader");if(e.length>0)for(let t=0;t<e.length;t++)e[t].style.opacity="0",await pb_sleep(400),e[t].style.display="none",e[t].remove()},pb_checkLoremIpsum=()=>{let e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++)e[t].classList.forEach(a=>{let l=a.split("-");if("loremIpsum"===l[0]){for(let s=0;s<l[1];s++)e[t].innerHTML+=pb_randomFromArray(pb_getObjectValues(pixelbite.loremIpsum))[1]+" ";e[t].classList.remove(a)}})},pb_checkChange=async e=>{await pb_sleep(pixelbite.update),await pb_classGenerator(),e<=0&&pb_checkLoaders(),await pb_checkChange(e+1)},pb_sleep=e=>new Promise(t=>setTimeout(t,e));function pb_randomString(e){let t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=0;for(;l<e;)t+=pb_randomFromArray(a),l+=1;return t}const pb_randomFromArray=e=>e[Math.floor(Math.random()*e.length)];window.onload=()=>{console.log("%cThank you for using PixelbiteCSS :) (version "+pixelbite.version+")","font-size:18px;font-weight:bold"),console.log("%cMore information can be found on our website or GitHub\nhttps://pixelbite-css.github.io, https://github.com/Pixelbite-CSS","font-weight:bold"),pb_addSignature(),pb_classGenerator()};const pb_changeRootVariable=(e,t)=>{document.documentElement.style.setProperty(e,t)},pb_classGenerator=()=>{pb_checkLoremIpsum(),pixelbite.theme.variables.primary!==document.documentElement.style.getPropertyValue("--primary-color")&&pb_changeRootVariable("--primary-color",pixelbite.theme.variables.primary),pixelbite.theme.variables.secondary!==document.documentElement.style.getPropertyValue("--secondary-color")&&pb_changeRootVariable("--secondary-color",pixelbite.theme.variables.secondary),pixelbite.theme.variables.success!==document.documentElement.style.getPropertyValue("--success-color")&&pb_changeRootVariable("--success-color",pixelbite.theme.variables.success),pixelbite.theme.variables.info!==document.documentElement.style.getPropertyValue("--info-color")&&pb_changeRootVariable("--info-color",pixelbite.theme.variables.info),pixelbite.theme.variables.danger!==document.documentElement.style.getPropertyValue("--danger-color")&&pb_changeRootVariable("--danger-color",pixelbite.theme.variables.danger),pixelbite.theme.variables.warning!==document.documentElement.style.getPropertyValue("--warning-color")&&pb_changeRootVariable("--warning-color",pixelbite.theme.variables.warning),pixelbite.theme.variables.fontPrimary!==document.documentElement.style.getPropertyValue("--font-family")&&pb_changeRootVariable("--font-family",pixelbite.theme.variables.fontPrimary),pixelbite.theme.variables.fontMonospace!==document.documentElement.style.getPropertyValue("--font-mono-family")&&pb_changeRootVariable("--font-mono-family",pixelbite.theme.variables.fontMonospace);let e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++){let a=e[t];pb_aliasClassReplace(a),a.classList.forEach(e=>{for(let t=0;t<class_library.length;t++){let l=e.split("-"),s=l[1]+"";if(s.includes("_")&&(l[1]=s.replace("_","-")),"1"===darkmode&&l[0].includes("dark:")&&(l[0]=l[0].replace("dark:","")),l[0].includes("foreach:")){l[0]=l[0].replace("foreach:","");let r=a.getElementsByTagName("*");if(l[0]===class_library[t][0])for(let i=0;i<r.length;i++)r[i].style.cssText+=class_library[t][1]+":"+pb_classSplitToString(l,1)+";";else for(let n=0;n<r.length;n++)r[n].classList.add(e)}l[0].includes("max")&&l[0].includes(":")&&l[0].split(":")[0].replace("max","").replace(":","").replace("px","")<=window.innerWidth&&(l[0]=l[0].split(":")[1]),l[0].includes("min")&&l[0].includes(":")&&l[0].split(":")[0].replace("min","").replace(":","").replace("px","")>=window.innerWidth&&(l[0]=l[0].split(":")[1]),l[0]===class_library[t][0]&&(a.style.cssText+=class_library[t][1]+":"+pb_classSplitToString(l,1)+";")}}),pb_updateSearchbars(),pb_generateFloatInput(a)}},pb_generateFloatInput=e=>{if(e.classList.contains("floatInput")&&e.getElementsByClassName("input")&&e.getElementsByClassName("label")&&e.getElementsByClassName("input")&&e.getElementsByTagName("label")){let t=e.getElementsByTagName("input")[0],a=e.getElementsByTagName("label")[0];t.value?a.classList.add("inputhastext"):a.classList.contains("inputhastext")&&a.classList.remove("inputhastext")}},pb_aliasClassReplace=e=>{let t=e.classList;for(let a=0;a<t.length;a++){let l=pb_getObjectValues(pixelbite.aliases);for(let s=0;s<l.length;s++)if(l[s][0]===t[a]){let r=l[s][1].split(" ");for(let i=0;i<r.length;i++)e.classList.add(r[i])}}},pb_classSplitToString=(e,t)=>{if(!e)return"";{let a=pb_getObjectValues(pixelbite.theme.variables),l=pb_getObjectValues(pixelbite.theme.colors),s="";for(let r=t;r<e.length;r++){for(let i=0;i<a.length;i++){if(a[i][1].includes("url(")){let n="font-"+pb_randomString(32),o=pixelbite.theme.variables;pb_putCustomFontIntoCSS(n,a[i][1]),o[a[i][0]]=n}e[r]===a[i][0]&&(e[r]=a[i][1])}for(let p=0;p<l.length;p++){if(l[p][1].includes("#")){let c=pb_colorConverter(l[p][1]);l[p][1]=[c[0]+"",c[1]+"%"]}e[r].includes(l[p][0])&&(e[r]=e[r].replace(l[p][0],"hsl("+l[p][1][0]+","+l[p][1][1]+","),e[r]+="%)")}s+=e[r]+" "}return s}},pb_colorConverter=e=>{let t=parseInt(e.substr(1,2),16),a=parseInt(e.substr(3,2),16),l=parseInt(e.substr(5,2),16);t/=255;let s=Math.max(t,a/=255,l/=255),r=Math.min(t,a,l),i,n,o=(s+r)/2;if(s==r)i=n=0;else{let p=s-r;switch(n=o>.5?p/(2-s-r):p/(s+r),s){case t:i=(a-l)/p+(a<l?6:0);break;case a:i=(l-t)/p+2;break;case l:i=(t-a)/p+4}i/=6}return[i,n,o]},pb_addSignature=()=>{let e=document.createComment("This site is created via PixelbiteCSS (https://github.com/Pixelbite-CSS)");document.body.appendChild(e)},debugmode=e=>{if(e){let t=document.getElementsByTagName("*");for(let a=0;a<t.length;a++)t[a].setAttribute("contenteditable","true")}},href=(e,t)=>{t=t?"_blank":"_self",window.open(e,t)},toggleElement=e=>{let t=document.getElementsByClassName(e);for(let a=0;a<t.length;a++)t[a].classList.contains("hidden")&&(t[a].style.display="none",t[a].classList.remove("hidden")),"none"!==t[a].style.display?t[a].style.display="none":t[a].style.display="flex"},pb_changeVariable=(e,t)=>{document.documentElement.style.setProperty(e,t)};let pb_beforeSlideshows=[];const pb_slideshowGenerator=async()=>{let e=document.getElementsByClassName("slideshow");if(e!==pb_beforeSlideshows&&e.length>0){for(let t=0;t<e.length;t++)if(!pb_beforeSlideshows.includes(e[t])){let a=e[t],l=a.getElementsByClassName("slide");pb_slideshowSlide(0,a,l)}pb_beforeSlideshows=e}await pb_sleep(1e3),await pb_slideshowGenerator()},pb_slideshowSlide=async(e,t,a)=>{for(let l=0;l<a.length;l++)a[l].style.left=(-l+e)*100+"%";e>=a.length-1&&(e=-1),await pb_sleep(5e3),await pb_slideshowSlide(e+1,t,a)},pb_setCookie=(e,t,a)=>{let l=new Date;l.setTime(l.getTime()+864e5*a);let s="expires="+l.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"},pb_getCookie=e=>{let t=e+"=",a=decodeURIComponent(document.cookie).split(";");for(let l=0;l<a.length;l++){let s=a[l];for(;" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""};let pb_searchbarsBefore=[];const pb_updateSearchbars=()=>{if(pb_searchbarsBefore.length!==document.getElementsByClassName("searchbar").length){let e=document.getElementsByClassName("searchbar");for(let t=0;t<e.length;t++){let a=e[t].getElementsByClassName("search")[0],l=e[t].getElementsByClassName("search-values")[0].getElementsByTagName("div");for(let s=0;s<l.length;s++)l[s].style.display="none";a.oninput=()=>{let l=a.value.toLowerCase(),s=e[t].getElementsByClassName("search-values")[0].getElementsByTagName("div");for(let r=0;r<s.length;r++)s[r].innerText.toLowerCase().includes(l)&&l?s[r].style.display="flex":s[r].style.display="none"}}pb_searchbarsBefore=e}};