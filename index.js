const class_library=[["c","color"],["p","padding"],["pos","position"],["o","opacity"],["pt","padding-top"],["pb","padding-bottom"],["pl","padding-left"],["pr","padding-right"],["m","margin"],["mt","margin-top"],["mb","margin-bottom"],["ml","margin-left"],["mr","margin-right"],["g","gap"],["ar","aspect-ratio"],["d","display"],["w","width"],["h","height"],["maxW","max-width"],["maxH","max-height"],["minW","min-width"],["minH","min-height"],["border","border"],["b","border"],["bleft","border-left"],["bright","border-right"],["btop","border-top"],["bbottom","border-bottom"],["br","border-radius"],["bg","background"],["ta","text-align"],["ff","font-family"],["fs","font-size"],["fw","font-weight"],["td","text-decoration"],["fill","fill"],["of","overflow"],["ofx","overflow-x"],["ofy","overflow-y"],["flex","flex"],["flexDirection","flex-direction"],["flexWrap","flex-wrap"],["flexItems","align-items"],["flexContent","align-content"],["flexJustifyContent","justify-content"],["flexAlignItems","align-items"],["gridColumns","grid-template-columns"],["gridRows","grid-template-rows"],["shadow","box-shadow"],["top","top"],["bottom","bottom"],["left","left"],["right","right"],["ws","word-spacing"],["ls","letter-spacing"],["lh","line-height"],["zIndex","z-index"],],pb_getRootVariable=e=>getComputedStyle(document.documentElement).getPropertyValue(e).toString(),pb_putCustomFontIntoCSS=(e,t)=>{let l=document.createElement("style");l.appendChild(document.createTextNode("@font-face {font-family: "+e+"; src: "+t+";}")),document.head.appendChild(l)};var pixelbite={classes:class_library,variables:{primary:pb_getRootVariable("--primary-color").toString(),secondary:pb_getRootVariable("--secondary-color").toString(),danger:pb_getRootVariable("--danger-color").toString(),info:pb_getRootVariable("--info-color").toString(),warning:pb_getRootVariable("--warning-color").toString(),success:pb_getRootVariable("--success-color").toString(),fontPrimary:pb_getRootVariable("--font-family").toString(),fontMonospace:pb_getRootVariable("--font-mono-family").toString()},colors:{white:[0,"0%"],gray:[0,"0%"],black:[0,"0%"],red:[0,"100%"],orange:[36,"100%"],yellow:[59,"100%"],green:[108,"100%"],teal:[154,"100%"],cyan:[182,"100%"],blue:[235,"100%"],purple:[275,"100%"],pink:[300,"100%"]},aliases:{},loremIpsum:["Hercle, species primus!","Indexs volare, tanquam emeritis nix.","Festus bulla vix locuss barcas est.","Domuss sunt equisos de flavum cedrium.","A falsis, diatria emeritis clabulare.","Medicinas sunt menss de pius nuclear vexatum iacere.","Verpas sunt plasmators de brevis pes.","Placidus, alter nuclear vexatum iaceres patienter talem de nobilis, noster cursus.","Ubi est azureus castor?","Cum abnoba resistere, omnes hilotaees examinare pius, emeritis poetaes.","Ubi est bi-color lanista?","Stellas prarere in ostravia!","Ausus peregrinationess, tanquam talis mensa.","Est teres deus, cesaris.","Est dexter animalis, cesaris.","Finis albus eleates est.","Bassus consilium interdum captiss accentor est.","Fuga noceres, tanquam castus racana.","Contencio, byssus, et tata.","Sunt guttuses gratia ferox, velox decores.","Elogium mirabilis abactor est.","Nunquam magicae mensa.","Pol, a bene historia.","Ubi est raptus acipenser?","Mensa, ratione, et vortex.","Rumors cantare!","Decors volare!","Fluctuss peregrinationes!","Cum agripeta credere, omnes silvaes transferre domesticus, clemens sectames.","Lapsus de domesticus era, manifestum lanista!","Cur clabulare ridetis?","Nam quis nulla.","Deuss observare, tanquam albus domus.","A falsis, planeta rusticus visus.","Primus seculas ducunt ad orgia.","Pol, a bene guttus, magnum glos!","Ortum satis ducunt ad fortis candidatus.","Neuter, alter fraticinidas unus attrahendam de teres, fortis rumor.","Devatios ortum!","Cadunt saepe ducunt ad primus imber.","Ubi est camerarius species?","Vae.","Genetrixs sunt adiurators de nobilis exemplar.","Nullam rhoncus aliquam metus.","Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.","Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.","In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.","Mauris suscipit.","Etiam sapien elit, consequat eget.","Etiam neque.","Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","Integer in sapien.","Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.","Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.","Duis condimentum augue id magna semper rutrum.","Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.","Jsi cool člověk.","Fusce aliquam vestibulum ipsum.","Aliquam erat volutpat.","Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.",],markdowns:{github:[{pattern:/^((?: )*)((?:-|\*|\+)\s|\d+\.\s)(.*)$/gm,replacement:function(e,t,l,a){let r=/ /g,s=t.match(r);return"<li class='ml-"+((s?s.length:0)+1)*12+"px'>"+a+"</li>"}},{pattern:/<\/li>\n<li>/g,replacement:"</li>\n$&"},{pattern:/^(\t*)<\/li>\n<\/ul>/gm,replacement:"$1</li>\n$1</ul>"},{pattern:/^(\t*)<\/li>\n<\/ol>/gm,replacement:"$1</li>\n$1</ol>"},{pattern:/^(\t*)<\/li>\n<\/li>/gm,replacement:"$1</li>\n$1<li>"},{pattern:/^(\t*)<\/ul>\n<ul>/gm,replacement:"$1</ul>\n$1<ul>"},{pattern:/^(\t*)<\/ol>\n<ol>/gm,replacement:"$1</ol>\n$1<ol>"},{pattern:/^#{6}\s+(.*)$/gm,replacement:"<h6>$1</h6>"},{pattern:/^#{5}\s+(.*)$/gm,replacement:"<h5>$1</h5>"},{pattern:/^#{4}\s+(.*)$/gm,replacement:"<h4>$1</h4>"},{pattern:/^#{3}\s+(.*)$/gm,replacement:"<h3>$1</h3>"},{pattern:/^#{2}\s+(.*)$/gm,replacement:"<h2>$1</h2>"},{pattern:/^#{1}\s+(.*)$/gm,replacement:"<h1>$1</h1>"},{pattern:/```([\s\S]*?)```/g,replacement:function(e,t){return"```"+(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replaceAll("*","&#x2A;").replaceAll("_","&#x5F;").replaceAll("[","&#x5B;"))+"```"}},{pattern:/^!~(.*?)$/gm,replacement:"<span class='highlight'>$1</span>"},{pattern:/^~~(.*?)$/gm,replacement:"<span>$1</span>"},{pattern:/~(.*?)~/g,replacement:'<code class="c-info">$1</code>'},{pattern:/^- \[(x| )\]\s+(.*)$/gm,replacement:'<li><input type="checkbox" $1> $2</li><ul>'},{pattern:/!\[([^\]]+)\]\(([^\s)]+)\)/g,replacement:'<img alt="$1" src="$2">'},{pattern:/(\[([^\]]+)\])?\(([^)\s]+)(?:\s"([^"]+)")?\)/g,replacement:function(e,t,l,a,r){let s=l||a,n=r?' title="'+r+'"':"";return t?'<a href="'+a+'"'+n+">"+s+"</a>":"("+s+")"}},{pattern:/\*\*\*([^*]+)\*\*\*/g,replacement:"<strong><em>$1</em></strong>"},{pattern:/\*\*([^*]+)\*\*/g,replacement:"<strong>$1</strong>"},{pattern:/\*([^*]+)\*/g,replacement:"<em>$1</em>"},{pattern:/___([^*]+)___/g,replacement:"<strong><em>$1</em></strong>"},{pattern:/__([^_]+)__/g,replacement:"<strong>$1</strong>"},{pattern:/_([^_]+)_/g,replacement:"<em>$1</em>"},{pattern:/^>\s+(.*)$/gm,replacement:"<blockquote>$1</blockquote>"},{pattern:/```([\w-]+)?\n([\s\S]*?)\n```/gm,replacement:'<pre class="numberedLines maxw-100% b-1px-solid-primary br-6px p-12px-16px" $1><code>$2</code></pre>'},{pattern:/`([^`]+)`/gm,replacement:'<code class="bg-rgba(128,128,128,.15) c-white50 fw-600 fs-12px p-2px-4px br-4px">$1</code>'},{pattern:/\n---\n/gm,replacement:"<hr>"},{pattern:/<\/li>\n\n/gm,replacement:"</li><br>"},{pattern:/<\/div>\n\n/gm,replacement:"</div><br>"},{pattern:/<\/pre>\n\n/gm,replacement:"</pre><br>"},{pattern:/\n\n/gm,replacement:"<br><br>"},]},configs:[],components:[],fontawesome:"https://kit.fontawesome.com/f474ae69e7.js",debug:!1,version:"1.6"};const pb_getObjectValues=e=>Object.entries(e),pb_setCustomComponents=()=>{pb_customComponentsCheck(document.getElementsByTagName("*"))},pb_customComponentsCheck=(e,t)=>{let l=pb_getObjectValues(pixelbite.components);t||(t="");for(let a=0;a<e.length;a++){let r=e[a];if(r.tagName.toUpperCase().includes("COMPONENT")){let s=r.getAttributeNames(),n=pb_alocatePath(r.getAttribute("path"));n=n.startsWith("http://")||n.startsWith("https://")?r.getAttribute("path"):t+r.getAttribute("path"),pb_includeHtmlToAnElement(r,n,s)}for(let i=0;i<l.length;i++)if(r.tagName.toUpperCase().includes(l[i][0].toLocaleUpperCase())){let o=r.getAttributeNames(),p=pb_alocatePath(l[i][1]);pb_includeHtmlToAnElement(r,p,o)}}};function pb_replaceAll(e,t,l){return e.split(t).join(l)}function deleteFromString(e,t){return e.replaceAll(t,"")}const pb_customMarkdown=(e,t)=>{let l=[],a=pb_getObjectValues(pixelbite.markdowns);for(let r=0;r<a.length;r++)a[r][0]===t&&(l=a[r][1]);let s=e;return l.forEach(({pattern:e,replacement:t})=>{s=s.replace(e,t)}),s},pb_componentErrorMessage=(e,t,l)=>{let a="toggle-"+pb_randomString(32),r="toggle-"+pb_randomString(32),s="";for(let n=0;n<t.length;n++)s+=" - ["+t[n]+'="'+e.getAttribute(t[n]).replaceAll("<","&lt;")+'"], <br>';e.innerHTML='<div class="'+a+' fw-500 p-14px-20px bg-warning br-4px m-4px pr-48px d-block"><code>'+l+'<br></code><code class="noselect '+r+'" onclick="toggleElement(\''+r+'\')">- see more details</code><div class="flexColumn flexLeft '+r+' hidden"><code class="noselect" onclick="toggleElement(\''+r+"')\">- see less details</code><code><br>this.getAttributes():<br>"+s+'</code></div><button class="close-x" onclick="toggleElement(\''+a+"')\"></button></div>"},pb_includeHtmlToAnElement=async(element,path,attributes)=>{path||(path="null");let relativePathSplit=path.split("/"),relativePath="";for(let i=0;i<relativePathSplit.length-1;i++)relativePath+=relativePathSplit[i]+"/";let componentRequest=new XMLHttpRequest;componentRequest.onreadystatechange=async function(){if(4===this.readyState){if(200===this.status){let response=this.response.replaceAll("	","  ");for(let i=0;i<attributes.length;i++){let attribute=attributes[i];if(attribute.includes(":object")){let object="",objectName=attribute.replace(":object",""),objectPath=element.getAttribute(attribute),objectRequest=new XMLHttpRequest;objectRequest.onreadystatechange=function(){if(4===this.readyState&&200===this.status)try{object=JSON.parse(this.responseText)}catch(e){console.error('PixelBite: Attribute "'+objectName+":object["+objectPath+']" in component has syntax error.')}404===this.status&&(object=null)};try{objectRequest.open("GET",objectPath,!0),objectRequest.send()}catch(err){console.error("help")}for(;!object;)await pb_sleep(10);let regex=/\$\{for\(([\s\S]*?)\)\}/g,objectFors=response.match(regex);if(objectFors){for(let j=0;j<objectFors.length;j++)if(objectFors[j].includes("${for(")){let objectForSplit=objectFors[j].substring(6,objectFors[j].length-2).split("::"),string="";for(let k=0;k<eval(objectForSplit[0]);k++)string+=pb_replaceAll(objectForSplit[1],"[i]","["+k+"]");response=pb_replaceAll(response,objectFors[j],string)}}let objectStrings=response.match(/\${(.*?)}/g);if(objectStrings){for(let j=0;j<objectStrings.length;j++)if(objectStrings[j].includes(objectName)){let objectString=objectStrings[j].replace("${","").replace("}","");try{let value=eval(objectString);response=pb_replaceAll(response,objectStrings[j],value)}catch(error){response=pb_replaceAll(response,objectStrings[j],""),console.error('PixelBite: Cannot read property from "'+objectName+'[object]" (reading "'+objectStrings[j]+'"), please check if value in the object exists.')}}}}let attribute_syntax="${"+attributes[i]+"}";response.includes(attribute_syntax)&&(response=pb_replaceAll(response,attribute_syntax,element.getAttribute(attribute)),element.removeAttribute(attribute));let regex=/\${variables.(.*?)}/g;response=response.replace(regex,(e,t)=>pixelbite.variables.hasOwnProperty(t)?pixelbite.variables[t]:e)}element.getAttribute("markdown")&&(response=pb_customMarkdown(response,element.getAttribute("markdown"))),element.innerHTML=response,element.getElementsByTagName("COMPONENT")&&pb_customComponentsCheck(element.getElementsByTagName("COMPONENT"),relativePath)}404===this.status&&pb_componentErrorMessage(element,attributes,"Component not found [path="+path+"]")}pb_classGenerator()};try{componentRequest.open("GET",path,!0),componentRequest.send()}catch(err){console.error(err)}};let darkmode=!1;window.addEventListener("load",async()=>{pb_classGenerator(),await pb_alocatedPath(),await pb_checkLoremIpsum();let e=pb_getCookie("darkmode");e?darkmode=e:(pb_setCookie("darkmode","0",365),darkmode="0"),pb_classGenerator(),await pb_configureConfigs(pixelbite.configs),await pb_setCustomComponents(),pb_slideshowGenerator(),await pb_addFontAwesome(),await pb_sleep(0),pb_checkLoaders()});const pb_alocatedPath=()=>{let e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++){let l=e[t],a=l.getAttributeNames();for(let r=0;r<a.length;r++)l.getAttribute(a[r]).includes("@/")&&l.setAttribute(a[r],l.getAttribute(a[r]).replace(/.*?@\/\s*/,"@/").replaceAll("@/",window.location.protocol+"//"+window.location.host+"/"))}},pb_alocatePath=e=>e.replace(/.*?@\/\s*/,"@/").replaceAll("@/",window.location.protocol+"//"+window.location.host+"/"),pb_configureConfigs=async e=>{await pb_configEval(window.location.protocol+"//"+window.location.host+"/pixelbite.conf");for(let t=0;t<e.length;t++)await pb_configEval(e[t]);pb_classGenerator()};function pb_extractWordBeforeEquals(e){let t=/(\w+)\s*=/,l=e.match(t);return l?l[1]:null}const pb_configEval=async url=>{let pattern=/^(http|https|ftp):\/\//;pattern.test(url)||(url=window.location.protocol+"//"+window.location.host+"/"+url);let object={values:{components:{},aliases:{},variables:{},colors:{},markdowns:{}}},text=await fetchFile(url);if(text){let lines=text.replace(/\/\/(?=(?:[^'"`]*['"`][^'"`]*['"`])*[^'"`]*$).*/g,"").replace(/#(?=(?:[^'"`]*['"`][^'"`]*['"`])*[^'"`]*$).*/g,"").replace(/\r?\n|\r/g,"").replace(/(\w+)\s*=/g,"\n$&").replace(/\[\s*(\w+)\s*\]/g,"\n[$1]").split("\n"),category="";for(let i=0;i<lines.length;i++){let line=lines[i];if(line.match(/\[(\w+)\]/))category=line.trim().replaceAll("[","").replaceAll("]","");else{let variable=pb_extractWordBeforeEquals(line),value=line.replace(/^\w+\s*=\s*/,"").trim().replace(/.*?@\/\s*/,"@/").replaceAll("@/",window.location.protocol+"//"+window.location.host+"/");try{"informations"===category?eval("object."+variable+" = "+value):"general"===category?(eval("object.values."+variable+" = "+value),eval("pixelbite."+variable+" = "+value)):"components"===category?(eval("object.values."+category+"."+variable+" = "+value),value.includes("http://")&&value.includes("https://")||(value=value.charAt(0)+window.location.protocol+"//"+window.location.host+"/"+value.slice(1)),eval("pixelbite.components."+variable+" = "+value)):"aliases"===category?(eval("object.values."+category+"."+variable+" = "+value),eval("pixelbite.aliases."+variable+" = "+value)):"markdowns"===category?(eval("object.values."+category+"."+variable+" = "+value),eval("pixelbite.markdowns."+variable+" = "+value)):"variables"===category?(eval("object.values."+category+"."+variable+" = "+value),eval("pixelbite.variables."+variable+" = "+value)):"colors"===category&&(eval("object.values."+category+"."+variable+" = "+value),eval("pixelbite.colors."+variable+" = "+value))}catch(error){console.error(error)}}}let string="Using ";object.theme_name?string+="theme "+object.theme_name:string+="config theme",object.theme_version&&(string+=" ",object.theme_version&&(string+=object.theme_version),object.theme_date&&(string+="\n- Released: "+object.theme_date),object.theme_url&&(string+=", "+object.theme_url)),object.author&&(string+="\n- Author: @"+object.author,object.author_url&&(string+=", "+object.author_url)),object.description&&(string+="\n- "+object.description);let style="";object.style&&(style+=object.style+";"),console.log("%c"+string,style.replaceAll("!","&#x21;")+"font-size:12px;font-weight:bold"),pixelbite.debug&&console.log(object);let configs=object.values.configs;if(configs)for(let i=0;i<configs.length;i++)pb_configEval(configs[i])}},fetchFile=async e=>{let t="";return await fetch(e).then(e=>{if(!e.ok)throw Error("File not found");return e.text()}).then(e=>{t=e}).catch(t=>{e!==window.location.protocol+"//"+window.location.host+"/pixelbite.conf"&&console.error('PixelBite: Cannot get response from "'+e+'"')}),t},changeTheme=async()=>{await changeThemeMode()},changeThemeMode=async()=>{"0"===darkmode?(darkmode="1",pb_setCookie("darkmode","1",365)):(darkmode="0",pb_setCookie("darkmode","0",365)),pb_classGenerator()},pb_checkLoaders=async()=>{let e=document.getElementsByClassName("loader");if(e.length>0)for(let t=0;t<e.length;t++)e[t].style.opacity="0",await pb_sleep(400),e[t].style.display="none",e[t].remove()},pb_checkLoremIpsum=()=>{let e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++)e[t].classList.forEach(l=>{let a=l.split("-");if("loremIpsum"===a[0]){for(let r=0;r<a[1];r++)e[t].innerHTML+=pb_randomFromArray(pb_getObjectValues(pixelbite.loremIpsum))[1]+" ";e[t].classList.remove(l)}})},pb_sleep=e=>new Promise(t=>setTimeout(t,e));function pb_randomString(e){let t="",l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;for(;a<e;)t+=pb_randomFromArray(l),a+=1;return t}const pb_randomFromArray=e=>e[Math.floor(Math.random()*e.length)];window.onload=()=>{console.log("%cThank you for using PixelbiteCSS :) (version "+pixelbite.version+")","font-size:18px;font-weight:bold"),console.log("%cMore information can be found on our website or GitHub\nhttps://pixelbite-css.github.io, https://github.com/Pixelbite-CSS","font-weight:bold"),pb_addSignature(),pb_classGenerator()};const pb_changeRootVariable=(e,t)=>{document.documentElement.style.setProperty(e,t)},pb_classGenerator=()=>{debugmode(),pb_alocatedPath(),pb_checkLoremIpsum(),pixelbite.variables.primary!==document.documentElement.style.getPropertyValue("--primary-color")&&pb_changeRootVariable("--primary-color",pixelbite.variables.primary),pixelbite.variables.secondary!==document.documentElement.style.getPropertyValue("--secondary-color")&&pb_changeRootVariable("--secondary-color",pixelbite.variables.secondary),pixelbite.variables.success!==document.documentElement.style.getPropertyValue("--success-color")&&pb_changeRootVariable("--success-color",pixelbite.variables.success),pixelbite.variables.info!==document.documentElement.style.getPropertyValue("--info-color")&&pb_changeRootVariable("--info-color",pixelbite.variables.info),pixelbite.variables.danger!==document.documentElement.style.getPropertyValue("--danger-color")&&pb_changeRootVariable("--danger-color",pixelbite.variables.danger),pixelbite.variables.warning!==document.documentElement.style.getPropertyValue("--warning-color")&&pb_changeRootVariable("--warning-color",pixelbite.variables.warning),pixelbite.variables.fontPrimary!==document.documentElement.style.getPropertyValue("--font-family")&&pb_changeRootVariable("--font-family",pixelbite.variables.fontPrimary),pixelbite.variables.fontMonospace!==document.documentElement.style.getPropertyValue("--font-mono-family")&&pb_changeRootVariable("--font-mono-family",pixelbite.variables.fontMonospace);let e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++){let l=e[t];pb_aliasClassReplace(l),l.classList.forEach(e=>{for(let t=0;t<class_library.length;t++){let a=e.split("-"),r=a[1]+"";if(r.includes("_")&&(a[1]=r.replace("_","-")),"1"===darkmode&&a[0].includes("dark:")&&(a[0]=a[0].replace("dark:","")),a[0].includes("foreach:")){a[0]=a[0].replace("foreach:","");let s=l.getElementsByTagName("*");if(a[0]===class_library[t][0])for(let n=0;n<s.length;n++)s[n].style.cssText+=class_library[t][1]+":"+pb_classSplitToString(a,1)+";";else for(let i=0;i<s.length;i++)s[i].classList.add(e)}if(a[0].includes("max")&&a[0].includes(":")&&a[0].split(":")[0].replace("max","").replace(":","").replace("px","")<=window.innerWidth&&(a[0]=a[0].split(":")[1]),a[0].includes("min")&&a[0].includes(":")&&a[0].split(":")[0].replace("min","").replace(":","").replace("px","")>=window.innerWidth&&(a[0]=a[0].split(":")[1]),a[0]===class_library[t][0]&&(l.style.cssText+=class_library[t][1]+":"+pb_classSplitToString(a,1)+";"),"gradient"===a[0]){a[3]||(a[3]=0);let o=pb_variableCheck(a[1]),p=pb_variableCheck(a[2]),c=pb_variableCheck(a[3]);l.style.cssText+="background: background: -moz-linear-gradient("+c+", "+o+" 0%, "+p+" 100%);background: -webkit-linear-gradient("+c+", "+o+" 0%, "+p+" 100%);background: linear-gradient("+c+", "+o+" 0%, "+p+' 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+o+'",endColorstr="'+p+'",GradientType=1);'}}}),pb_updateSearchbars(),pb_updateDropdowns(),pb_generateFloatInput(l)}},pb_generateFloatInput=e=>{if(e.classList.contains("floatInput")&&e.getElementsByClassName("input")&&e.getElementsByClassName("label")&&e.getElementsByClassName("input")&&e.getElementsByTagName("label")){let t=e.getElementsByTagName("input")[0],l=e.getElementsByTagName("label")[0];t.value?l.classList.add("inputhastext"):l.classList.contains("inputhastext")&&l.classList.remove("inputhastext")}},pb_aliasClassReplace=e=>{let t=e.classList;for(let l=0;l<t.length;l++){let a=pb_getObjectValues(pixelbite.aliases);for(let r=0;r<a.length;r++)if(a[r][0]===t[l]){let s=a[r][1].split(" ");for(let n=0;n<s.length;n++)e.classList.add(s[n])}}},pb_classSplitToString=(e,t)=>{if(!e)return"";{let l=pb_getObjectValues(pixelbite.variables),a=pb_getObjectValues(pixelbite.colors),r="";for(let s=t;s<e.length;s++){for(let n=0;n<l.length;n++){if(l[n][1].includes("url(")){let i="font-"+pb_randomString(32),o=pixelbite.variables;pb_putCustomFontIntoCSS(i,l[n][1]),o[l[n][0]]=i}e[s]===l[n][0]&&(e[s]=l[n][1])}for(let p=0;p<a.length;p++){if(a[p][1].includes("#")){let c=pb_colorConverter(a[p][1]);a[p][1]=[360*c[0]+"",100*c[1]+"%"]}if(e[s].includes(a[p][0])){let m=e[s].replace(a[p][0],"");m||(m=50),pb_isNumeric(m)&&(e[s]="hsl("+a[p][1][0]+","+a[p][1][1]+","+m+"%)")}}r+=e[s]+" "}return r}},pb_variableCheck=e=>{let t=pb_getObjectValues(pixelbite.variables),l=pb_getObjectValues(pixelbite.colors);for(let a=0;a<t.length;a++){if(t[a][1].includes("url(")){let r="font-"+pb_randomString(32),s=pixelbite.variables;pb_putCustomFontIntoCSS(r,t[a][1]),s[t[a][0]]=r}e===t[a][0]&&(e=t[a][1])}for(let n=0;n<l.length;n++){if(l[n][1].includes("#")){let i=pb_colorConverter(l[n][1]);l[n][1]=[360*i[0]+"",100*i[1]+"%"]}if(e.includes(l[n][0])){let o=e.replace(l[n][0],"");o||(o=50),pb_isNumeric(o)&&(e="hsl("+l[n][1][0]+","+l[n][1][1]+","+o+"%)")}}return e},pb_isNumeric=e=>"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e)),pb_colorConverter=e=>{let t=parseInt(e.substr(1,2),16),l=parseInt(e.substr(3,2),16),a=parseInt(e.substr(5,2),16);t/=255;let r=Math.max(t,l/=255,a/=255),s=Math.min(t,l,a),n,i,o=(r+s)/2;if(r==s)n=i=0;else{let p=r-s;switch(i=o>.5?p/(2-r-s):p/(r+s),r){case t:n=(l-a)/p+(l<a?6:0);break;case l:n=(a-t)/p+2;break;case a:n=(t-l)/p+4}n/=6}return[n,i,o]},pb_addSignature=()=>{let e=document.createComment("This site is created via PixelbiteCSS (https://github.com/Pixelbite-CSS)");document.body.appendChild(e)},pb_addFontAwesome=()=>{let e=document.createElement("script");e.setAttribute("src",pixelbite.fontawesome),e.setAttribute("crossorigin","anonymous"),document.head.appendChild(e)},debugmode=()=>{if(pixelbite.debug){let e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++)e[t].setAttribute("contenteditable","true")}},href=(e,t)=>{t=t?"_blank":"_self",window.open(e,t)},toggleElement=e=>{let t=document.getElementsByClassName(e);for(let l=0;l<t.length;l++)t[l].classList.contains("hidden")&&(t[l].style.display="none",t[l].classList.remove("hidden")),"none"!==t[l].style.display?t[l].style.display="none":t[l].style.display="flex"},pb_changeVariable=(e,t)=>{document.documentElement.style.setProperty(e,t)};let pb_beforeSlideshows=[];const pb_slideshowGenerator=async()=>{let e=document.getElementsByClassName("slideshow");if(e!==pb_beforeSlideshows&&e.length>0){for(let t=0;t<e.length;t++)if(!pb_beforeSlideshows.includes(e[t])){let l=e[t],a=l.getElementsByClassName("slide");pb_slideshowSlide(0,l,a)}pb_beforeSlideshows=e}await pb_sleep(1e3),await pb_slideshowGenerator()},pb_slideshowSlide=async(e,t,l)=>{for(let a=0;a<l.length;a++)l[a].style.left=(-a+e)*100+"%";e>=l.length-1&&(e=-1),await pb_sleep(5e3),await pb_slideshowSlide(e+1,t,l)},pb_setCookie=(e,t,l)=>{let a=new Date;a.setTime(a.getTime()+864e5*l);let r="expires="+a.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"},pb_getCookie=e=>{let t=e+"=",l=decodeURIComponent(document.cookie).split(";");for(let a=0;a<l.length;a++){let r=l[a];for(;" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""};let pb_searchbarsBefore=[];const pb_updateSearchbars=()=>{if(pb_searchbarsBefore.length!==document.getElementsByClassName("searchbar").length){let e=document.getElementsByClassName("searchbar");for(let t=0;t<e.length;t++){let l=e[t].getElementsByClassName("search")[0],a=e[t].getElementsByClassName("search-values")[0].getElementsByTagName("div");for(let r=0;r<a.length;r++)a[r].style.display="none";l.oninput=()=>{let a=l.value.toLowerCase(),r=e[t].getElementsByClassName("search-values")[0].getElementsByTagName("div");for(let s=0;s<r.length;s++)r[s].innerText.toLowerCase().includes(a)&&a?r[s].style.display="flex":r[s].style.display="none"}}pb_searchbarsBefore=e}};let pb_dropdownsBefore=[];const pb_updateDropdowns=()=>{let e=document.getElementsByClassName("dropdown");if(pb_dropdownsBefore.length!==e.length){for(let t=0;t<e.length;t++){let l=document.getElementsByTagName("div"),a=document.getElementsByTagName("button");for(let r=0;r<l.length;r++)l[r].remove;for(let s=0;s<a.length;s++)a[s].remove;let n=e[t].getElementsByTagName("select");for(let i=0;i<n.length;i++)n[i].style.display="none";let o=e[t].getElementsByTagName("select")[0].getElementsByTagName("option"),p=document.createElement("button"),c="toggle-"+pb_randomString(32);p.onclick=()=>toggleElement(c),p.innerHTML="<div class='flexRow flexSpaceBetween g-15px w-100%'><div>"+o[0].innerHTML+"</div><i class='fa-solid fa-caret-down'></i></div>",e[t].append(p),e[t].value=o[0].value;let m=document.createElement("div");m.classList.add("hidden"),m.classList.add(c);for(let b=0;b<o.length;b++){let u=document.createElement("div");u.value=o[b].value,u.innerHTML=o[b].innerHTML,u.onclick=()=>{e[t].value=o[b].value,e[t].getElementsByTagName("button")[0].innerHTML="<div class='flexRow flexSpaceBetween g-15px w-100%'><div>"+o[b].innerHTML+"</div><i class='fa-solid fa-caret-down'></i></div>",pb_classGenerator(),toggleElement(c)},m.append(u)}e[t].append(m)}pb_dropdownsBefore=e}};window.addEventListener("resize",pb_classGenerator);