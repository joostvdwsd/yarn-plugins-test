/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-gitversion",
factory: function (require) {
var plugin=(()=>{var Oe=Object.create,W=Object.defineProperty,Ae=Object.defineProperties,Se=Object.getOwnPropertyDescriptor,Ie=Object.getOwnPropertyDescriptors,je=Object.getOwnPropertyNames,ne=Object.getOwnPropertySymbols,Me=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var oe=(t,e,r)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,se=(t,e)=>{for(var r in e||(e={}))ie.call(e,r)&&oe(t,r,e[r]);if(ne)for(var r of ne(e))Ue.call(e,r)&&oe(t,r,e[r]);return t},ae=(t,e)=>Ae(t,Ie(e)),_e=t=>W(t,"__esModule",{value:!0});var g=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var D=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Fe=(t,e)=>{for(var r in e)W(t,r,{get:e[r],enumerable:!0})},De=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of je(e))!ie.call(t,n)&&n!=="default"&&W(t,n,{get:()=>e[n],enumerable:!(r=Se(e,n))||r.enumerable});return t},d=t=>De(_e(W(t!=null?Oe(Me(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var le=D((Y,pe)=>{(function(t,e){typeof define=="function"&&define.amd?define([],e):typeof Y=="object"?pe.exports=e():t.compareVersions=e()})(Y,function(){var t=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function e(i,s){return i.indexOf(s)===-1?i.length:i.indexOf(s)}function r(i){var s=i.replace(/^v/,"").replace(/\+.*$/,""),l=e(s,"-"),m=s.substring(0,l).split(".");return m.push(s.substring(l+1)),m}function n(i){var s=parseInt(i,10);return isNaN(s)?i:s}function a(i){if(typeof i!="string")throw new TypeError("Invalid argument expected string");var s=i.match(t);if(!s)throw new Error("Invalid argument not valid semver ('"+i+"' received)");return s.shift(),s}function o(i,s){return typeof i!=typeof s?[String(i),String(s)]:[i,s]}function u(i,s){var[l,m]=o(n(i),n(s));return l>m?1:l<m?-1:0}function f(i,s){for(var l=0;l<Math.max(i.length,s.length);l++){var m=u(i[l]||0,s[l]||0);if(m!==0)return m}return 0}function c(i,s){[i,s].forEach(a);for(var l=r(i),m=r(s),p=0;p<Math.max(l.length-1,m.length-1);p++){var k=parseInt(l[p]||0,10),C=parseInt(m[p]||0,10);if(k>C)return 1;if(C>k)return-1}var L=l[l.length-1],R=m[m.length-1];if(L&&R){var w=L.split(".").map(n),b=R.split(".").map(n);for(p=0;p<Math.max(w.length,b.length);p++){if(w[p]===void 0||typeof b[p]=="string"&&typeof w[p]=="number")return-1;if(b[p]===void 0||typeof w[p]=="string"&&typeof b[p]=="number"||w[p]>b[p])return 1;if(b[p]>w[p])return-1}}else if(L||R)return L?-1:1;return 0}var y=[">",">=","=","<","<="],v={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};function E(i){if(typeof i!="string")throw new TypeError("Invalid operator type, expected string but got "+typeof i);if(y.indexOf(i)===-1)throw new TypeError("Invalid operator, expected one of "+y.join("|"))}return c.validate=function(i){return typeof i=="string"&&t.test(i)},c.compare=function(i,s,l){E(l);var m=c(i,s);return v[l].indexOf(m)>-1},c.satisfies=function(i,s){var l=s.match(/^([<>=~^]+)/),m=l?l[1]:"=";if(m!=="^"&&m!=="~")return c.compare(i,s,m);var[p,k,C]=a(i),[L,R,w]=a(s);return u(p,L)!==0?!1:m==="^"?f([k,C],[R,w])>=0:u(k,R)!==0?!1:u(C,w)>=0},c})});var we=D((Zt,ee)=>{(function(){"use strict";var t=g("fs"),e=g("string_decoder").StringDecoder;function r(o,u,f,c,y){var v=0,c=c||"utf8",f=f||`
`,y=y||1024,E=new Buffer(y),i="",s=new e(c),l=!1,m=!1,p=-1;function k(){l||(t.close(o,function(w){if(w)throw w}),l=!0)}function C(w){function b(){t.read(o,E,0,y,v,function(_,F){var re;if(_)throw _;F<y&&(m=!0,k()),v+=F,i+=s.write(E.slice(0,F)),p<0&&(p=i.indexOf(f)),re=p===i.length-1,F&&(p===-1||re)&&!m?b():w()})}b()}function L(){return i.length>0||!m}function R(w){function b(){var _=i.substring(0,p);i=i.substring(p+f.length),p=-1,w(_)}if(p<0&&(p=i.indexOf(f)),p<0)if(m)if(L())p=i.length,b();else throw new Error("No more lines to read.");else C(b);else b()}this.hasNextLine=L,this.nextLine=R,this.close=k,C(u)}function n(o,u,f,c,y){t.open(o,"r",parseInt("666",8),function(v,E){var i;if(v)throw v;i=new r(E,function(){u(i)},f,c,y)})}function a(o,u,f,c,y){var v,E=u.length==3;function i(){v&&typeof v=="function"&&v()}return n(o,function(s){function l(){s.hasNextLine()?setImmediate(p):i()}function m(k){k!==!1?l():(i(),s.close())}function p(){s.nextLine(function(k){var C=!s.hasNextLine();E?u(k,C,m):u(k,C)!==!1?l():(i(),s.close())})}l()},f,c,y),{then:function(s){v=s}}}ee.exports.open=n,ee.exports.eachLine=a})()});var Pe=D((Jt,ye)=>{ye.exports=function(t,e){e=e||{},e.listUnicodeChar=e.hasOwnProperty("listUnicodeChar")?e.listUnicodeChar:!1,e.stripListLeaders=e.hasOwnProperty("stripListLeaders")?e.stripListLeaders:!0,e.gfm=e.hasOwnProperty("gfm")?e.gfm:!0;var r=t||"";r=r.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(e.listUnicodeChar?r=r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):r=r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(r=r.replace(/\n={2,}/g,`
`).replace(/~~/g,"").replace(/`{3}.*\n/g,"")),r=r.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[.*?\][\[\(].*?[\]\)]/g,"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,`

`)}catch(n){return console.error(n),t}return r}});var Ve=D((Qt,Le)=>{var I=g("os").EOL,Ke=we(),Ze=Pe(),ke=/\[?v?([\w\d.-]+\.[\w\d.-]+[a-zA-Z0-9])\]?/,be=/.*[ ](\d\d?\d?\d?[-/.]\d\d?[-/.]\d\d?\d?\d?).*/,Je=/^###/,Qe=/^[*-]/,Xe={removeMarkdown:!0};function Ye(t,e){if(typeof t=="undefined")throw new Error("missing options argument");if(typeof t=="string"&&(t={filePath:t}),typeof t=="object"){let a=typeof t.filePath!="undefined",o=typeof t.text!="undefined",u=typeof t.filePath!="string",f=typeof t.text!="string";if(!a&&!o)throw new Error("must provide filePath or text");if(a&&u)throw new Error("invalid filePath, expected string");if(o&&f)throw new Error("invalid text, expected string")}let r=Object.assign({},Xe,t),n=et(r);return typeof e=="function"&&n.then(function(a){e(null,a)}).catch(function(a){e(a)}),n}function et(t){let e=t.filePath,r=t.text,n={log:{versions:[]},current:null},a=tt.bind(n,t);return new Promise(function(o,u){function f(){n.current&&Ee(n),n.log.description=Ce(n.log.description),n.log.description===""&&delete n.log.description,o(n.log)}r?(r.split(/\r\n?|\n/mg).forEach(a),f()):Ke.eachLine(e,a,I).then(f)})}function tt(t,e){if(!e.match(/^\[[^[\]]*\] *?:/)){if(!this.log.title&&e.match(/^# ?[^#]/)){this.log.title=e.substring(1).trim();return}if(e.match(/^##? ?[^#]/)){this.current&&this.current.title&&Ee(this),this.current=rt(),ke.exec(e)&&(this.current.version=ke.exec(e)[1]),this.current.title=e.substring(2).trim(),this.current.title&&be.exec(this.current.title)&&(this.current.date=be.exec(this.current.title)[1]);return}if(this.current){if(this.current.body+=e+I,Je.exec(e)){let r=e.replace("###","").trim();this.current.parsed[r]||(this.current.parsed[r]=[],this.current._private.activeSubhead=r)}if(Qe.exec(e)){let r=t.removeMarkdown?Ze(e):e;this.current.parsed._.push(r),this.current._private.activeSubhead&&this.current.parsed[this.current._private.activeSubhead].push(r)}}else this.log.description=(this.log.description||"")+e+I}}function rt(){return{version:null,title:null,date:null,body:"",parsed:{_:[]},_private:{activeSubhead:null}}}function Ee(t){delete t.current._private,t.current.body=Ce(t.current.body),t.log.versions.push(t.current)}function Ce(t){return t?(t=t.trim(),t=t.replace(new RegExp("["+I+"]*"),""),t=t.replace(new RegExp("["+I+"]*$"),""),t):""}Le.exports=Ye});var ot={};Fe(ot,{BranchType:()=>h,DEFAULT_REPO_VERSION:()=>$,GitVersionBumpCommand:()=>S,GitVersionCheckCommand:()=>M,GitVersionCommitCommand:()=>U,GitVersionConfiguration:()=>x,GitVersionPublishCommand:()=>j,GitVersionResetCommand:()=>A,GitVersionRestoreCommand:()=>N,GitVersionTagCommand:()=>B,addAndCommit:()=>Q,bump:()=>z,checkGit:()=>qe,currentBranch:()=>Z,default:()=>it,execCapture:()=>P,tag:()=>J,tagPrefix:()=>G,updateWorkspaceWithVersion:()=>q,updateWorkspacesWithVersion:()=>O});var T=d(g("@yarnpkg/core")),fe=d(g("clipanion"));var h;(function(o){o.MAIN="main",o.PRERELEASE="prerelease",o.RELEASE="release",o.FEATURE="feature",o.UNKNOWN="unknown"})(h||(h={}));var ce=d(g("child_process"));async function P(t,e,r){return new Promise((n,a)=>{console.log(">>>",t,...e);let o=(0,ce.spawn)(t,e,{cwd:r}),u="",f="";o.stdout.on("data",c=>{u+=c.toString()}),o.stderr.on("data",c=>{f+=c.toString()}),o.on("close",c=>{c===0?n({code:c,result:u}):a(new Error(u+f))})})}async function qe(){return P("git",["--version"])}async function Z(){return process.env.BUILD_SOURCEBRANCHNAME?process.env.BUILD_SOURCEBRANCHNAME:(await P("git",["rev-parse","--abbrev-ref","HEAD"])).result.replace(/\n*$/,"")}async function J(t,e){if(await P("git",["tag",t]),e)return P("git",["push","--no-verify","origin",t])}async function Q(t,e){let r=await P("git",["add",...t]);console.log(r.result);let n=await P("git",["commit",...t,"-m",e]);console.log(n.result)}var $="0.0.0",X=class{static async fromContext(e){let r=await T.Configuration.find(e.cwd,e.plugins),n=await Z();return new X(r,n)}constructor(e,r){this.yarnConfig=e;let n=e.get("featureBranchPatterns");console.log(n),console.log(r),this.featureBranchPatterns=n.map(a=>new RegExp(a)),this.mainBranch=e.get("mainBranch"),this.independentVersioning=e.get("independentVersioning"),this.versionTagPrefix=e.get("versionTagPrefix"),this.versionBranch=this.parse(r)}parse(e){if(this.mainBranch===e)return{branchType:h.MAIN,name:e};for(let r of this.featureBranchPatterns)if(r.test(e)){let n=r.exec(e);if(n&&n.length===2)return{name:n[1],branchType:h.FEATURE};throw new fe.UsageError(`The feature pattern '${r.source}' matched the current branch but it should result in exact 1 group match`)}return{name:"unknown",branchType:h.UNKNOWN}}},x=X;x.definition={featureBranchPatterns:{description:`Feature branches. This will apply the following rules to bumps:
  - version pattern: 'x.x.x-<<feature>>.<<increment>>'
  - always increment on each commit
  - no checking for conventional commits in git history
  - publish on npm channel '<<feature>>'`,isArray:!0,type:T.SettingsType.STRING,default:["^feature/(.*)$"]},releaseBranchPatterns:{description:`Release branches. This will apply the following rules to bumps:
  - Official release channels
  - Conventional commits enabled
  - publish on npm channel '<<release>>'`,isArray:!0,type:T.SettingsType.STRING,default:["^release/(.*)$"]},mainBranch:{description:"The main branch. This is the official channel and will produce npm packages with the lates npm disttag",type:T.SettingsType.STRING,default:"main"},independentVersioning:{description:"When independent versioning is enabled each package will have a different version based on the commits in the package folder",type:T.SettingsType.BOOLEAN,default:!1},versionTagPrefix:{description:'The prefix used for git tags. Defaults to "v"',type:T.SettingsType.STRING,default:"v"}};var ue=d(g("@yarnpkg/cli")),me=d(g("@yarnpkg/core"));function G(t,e){let r=t;return e&&(e.scope&&(r+=`@${e.scope}/`),r+=e.name,r+="-"),r}async function O(t,e){return Promise.all(t.map(r=>q(r,e)))}async function q(t,e){if(t.manifest.version!==e)return console.log(`@${t.locator.scope}/${t.locator.name}`,t.manifest.version,"=>",e),t.manifest.version=e,t.persistManifest()}var He=le(),N=class extends ue.BaseCommand{async execute(){let e=await x.fromContext(this.context),{project:r}=await me.Project.find(e.yarnConfig,this.context.cwd);if(e.independentVersioning){let n=r.workspaces.map(a=>this.updateWorkspaceFromGit(e.versionTagPrefix,e.versionBranch,a));Promise.all(n)}else{let n=[this.determineCurrentGitVersion(e.versionTagPrefix,e.versionBranch),...r.workspaces.map(o=>this.determineCurrentGitVersion(e.versionTagPrefix,e.versionBranch,o.locator))],a=(await Promise.all(n)).sort(He).reverse();await O(r.workspaces,a[0])}}async updateWorkspaceFromGit(e,r,n){let a=await this.determineCurrentGitVersion(e,r,n.locator);return q(n,a)}async determineCurrentGitVersion(e,r,n){let a=G(e,n),o=`${a}*`,c=(await P("git",["-c","versionsort.suffix=-","tag","--sort=-version:refname","--list",o])).result.split(`
`),y=c.filter(s=>new RegExp(`^${this.escapeRegExp(a)}[0-9]+.[0-9]+.[0-9]+$`).test(s));if(r.branchType!==h.MAIN){let s=c.filter(l=>new RegExp(`${a}[0-9]+.[0-9]+.[0-9]+-${this.escapeRegExp(r.name)}.[0-9]+$`).test(l));s.length>0?c=s:c=y}else c=y;c=c.filter(s=>s);let v;c.length>0?v=c[0]:v="0.0.0";let E=v,i=new RegExp(`^${this.escapeRegExp(a)}`);return E=E.replace(i,""),E}escapeRegExp(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}};N.paths=[["gitversion","restore"]];var ge=d(g("@yarnpkg/cli")),H=d(g("@yarnpkg/core"));var A=class extends ge.BaseCommand{async execute(){let e=await H.Configuration.find(this.context.cwd,this.context.plugins),{project:r}=await H.Project.find(e,this.context.cwd);await O(r.workspaces,$)}};A.paths=[["gitversion","reset"]];var de=d(g("@yarnpkg/cli")),K=d(g("@yarnpkg/core"));var ze=["--no-sign","--skip.commit","--skip.tag"];async function z(t,e,r,n,a){let o=[...ze];if(o.push(`--path='${r}'`),o.push(`--tag-prefix='${e}'`),o.push(`--infile='${r}/CHANGELOG.md'`),a&&(o.push(`--release-as='${a}'`),o.push("--skip.bump")),t.branchType===h.FEATURE)o.push(`--prerelease=${t.name}`,"--skip.changelog"),a||o.push("--release-as=patch");else if(t.branchType===h.PRERELEASE||t.branchType===h.RELEASE)o.push(`--prerelease=${t.name}`);else if(t.branchType===h.UNKNOWN)return;let u=await P("yarn",["standard-version",...o],n);console.log(u.result)}var S=class extends de.BaseCommand{async execute(){let e=new N;e.context=this.context,e.cli=this.cli,await e.execute();let r=await x.fromContext(this.context),{project:n}=await K.Project.find(r.yarnConfig,this.context.cwd);if(r.independentVersioning)throw new Error("Not implemented");{await z(r.versionBranch,G(r.versionTagPrefix),n.topLevelWorkspace.cwd,n.topLevelWorkspace.cwd);let o=(await K.Manifest.find(n.topLevelWorkspace.cwd)).version;if(o){let u=n.topLevelWorkspace.getRecursiveWorkspaceChildren().map(async f=>(f.manifest.version=o,await f.persistManifest(),z(r.versionBranch,G(r.versionTagPrefix),f.cwd,n.topLevelWorkspace.cwd,o)));await Promise.all(u)}}}};S.paths=[["gitversion","bump"]];var Re=d(g("@yarnpkg/cli")),V=d(g("@yarnpkg/core"));var te=d(g("path"));var he=d(g("@yarnpkg/cli")),xe=d(g("@yarnpkg/core")),ve=d(g("clipanion"));var B=class extends he.BaseCommand{constructor(){super(...arguments);this.push=ve.Option.Boolean("Push the tags to git",!0)}async execute(){let e=await x.fromContext(this.context),{project:r}=await xe.Project.find(e.yarnConfig,this.context.cwd);if(e.independentVersioning)throw new Error("Not implemented");{let n=r.topLevelWorkspace.manifest.version;n&&n!==$&&await J(`${e.versionTagPrefix}${n}`,this.push)}}};B.paths=[["gitversion","tag"]];var Te=d(g("fs")),nt=Ve(),j=class extends Re.BaseCommand{async execute(){let e=new B;e.context=this.context,e.cli=this.cli,await e.execute();let r=await x.fromContext(this.context),{project:n}=await V.Project.find(r.yarnConfig,this.context.cwd),a=new V.LightReport({configuration:r.yarnConfig,stdout:this.context.stdout});if(r.independentVersioning)throw new Error("Not implemented");{let o=n.workspaces.filter(this.filterPublicWorkspace);for(let f of o){let c=[];(r.versionBranch.branchType===h.FEATURE||r.versionBranch.branchType===h.PRERELEASE)&&(c=["--tag",r.versionBranch.name]),a.reportInfo(V.MessageName.UNNAMED,`Publishing ${V.structUtils.stringifyIdent(f.locator)}`),await P("yarn",["npm","publish",...c],f.cwd)}let u=ae(se({},await this.readChangeLog(n.topLevelWorkspace)),{packages:await Promise.all(o.map(f=>this.readChangeLog(f)))});await n.configuration.triggerHook(f=>f.afterPublish,n,r.versionBranch,u)}}async readChangeLog(e){let r=(0,te.join)(e.cwd,"CHANGELOG.md"),n=e.manifest.version,a;if((0,Te.existsSync)(r)){let u=(await nt({filePath:(0,te.join)(e.cwd,"CHANGELOG.md"),removeMarkdown:!1})).versions.find(f=>f.version===n)}return{version:n||"0.0.0",changelog:a,packageName:V.structUtils.stringifyIdent(e.locator)}}filterPublicWorkspace(e){return e.manifest.private===!1}};j.paths=[["gitversion","publish"]];var $e=d(g("@yarnpkg/cli")),Ne=d(g("@yarnpkg/core"));var M=class extends $e.BaseCommand{async execute(){let e=await x.fromContext(this.context);console.log(e.versionBranch);let{project:r}=await Ne.Project.find(e.yarnConfig,this.context.cwd);r.workspaces.forEach(n=>{console.log(n.locator.scope,n.locator.name,n.manifest.private,n.manifest.version)})}};M.paths=[["gitversion","check"]];var Be=d(g("@yarnpkg/cli")),Ge=d(g("@yarnpkg/core"));var U=class extends Be.BaseCommand{async execute(){let e=await x.fromContext(this.context),{project:r}=await Ge.Project.find(e.yarnConfig,this.context.cwd);if(e.independentVersioning)throw new Error("Not implemented");{let n=r.topLevelWorkspace.manifest.version;n&&n!==$&&await Q(["**/CHANGELOG.md"],`chore(release): ${n}`)}}};U.paths=[["gitversion","commit"]];var We={configuration:x.definition,commands:[M,N,A,S,B,U,j],hooks:{async wrapNetworkRequest(t,e){return t}}};var it=We;return ot;})();
return plugin;
}
};
