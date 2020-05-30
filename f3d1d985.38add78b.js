(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),i=(n(0),n(230)),u={id:"submitit_launcher",title:"Submitit Launcher plugin",sidebar_label:"Submitit Launcher plugin"},o={id:"plugins/submitit_launcher",title:"Submitit Launcher plugin",description:"The Submitit Launcher plugin provides a SLURM  Launcher based on Submitit.",source:"@site/docs/plugins/submitit_launcher.md",permalink:"/docs/next/plugins/submitit_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/submitit_launcher.md",version:"next",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1590795180,sidebar_label:"Submitit Launcher plugin"},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher/example"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,"The Submitit Launcher plugin provides a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://slurm.schedmd.com/documentation.html"}),"SLURM ")," Launcher based on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookincubator/submitit"}),Object(i.b)("inlineCode",{parentName:"a"},"Submitit")),"."),Object(i.b)("p",null,"Install with "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ git clone https://github.com/facebookresearch/hydra.git\n$ cd hydra\n$ pip install .                              # install hydra\n$ pip install plugins/hydra_submitit_launcher  # Install plugin\n")),Object(i.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: This plugin depends on Hydra 1.0 which is not yet released, if you want to try it install Hydra from master"),Object(i.b)("br",null),Object(i.b)("p",null,"Once installed, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: submitit\n")),Object(i.b)("p",null,"Submitit supports 3 kind of queues: auto, local and slurm. Its config looks like this"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# @package _group_\n\ncls: hydra_plugins.hydra_submitit_launcher.submitit_launcher.SubmititLauncher\nparams:\n  # one of auto,local and slurm\n  queue: local\n\n  folder: ${hydra.sweep.dir}/.${hydra.launcher.params.queue}\n  queue_parameters:\n    # slurm queue parameters\n    slurm:\n      nodes: 1\n      num_gpus: 1\n      ntasks_per_node: 1\n      mem: ${hydra.launcher.mem_limit}GB\n      cpus_per_task: 10\n      time: 60\n      partition: dev\n      signal_delay_s: 120\n      job_name: ${hydra.job.name}\n      # Maximum number of retries on job timeout.\n      # Change this only after you confirmed your code can handle re-submission\n      # by properly resuming from the latest stored checkpoint.\n      max_num_timeout: 1\n    # local queue parameters\n    local:\n      gpus_per_node: 1\n      tasks_per_node: 1\n      timeout_min: 60\n    # auto queue parameters\n    auto:\n      max_num_timeout: 1\n\n# variables used by queues above\nmem_limit: 24\n")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookincubator/submitit"}),Object(i.b)("inlineCode",{parentName:"a"},"Submitit")," documentation")," for full details about the parameters above."),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher/example"}),"example application")," using this launcher is provided in the plugin repository."),Object(i.b)("p",null,"Starting the app with ",Object(i.b)("inlineCode",{parentName:"p"},"python my_app.py task=1,2,3 -m")," will launch 3 executions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py task=1,2,3 -m\n[HYDRA] Sweep output dir : multirun/2020-05-28/15-05-22\n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n")),Object(i.b)("p",null,"You will be able to see the output of the app in the output dir:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"$ tree\n.\n\u251c\u2500\u2500 0\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 1\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 2\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u2514\u2500\u2500 multirun.yaml\n\n\n$ cat 0/my_app.log \n[2020-05-28 15:05:23,511][__main__][INFO] - Process ID 15887 executing task 1 ...\n[2020-05-28 15:05:24,514][submitit][INFO] - Job completed successfully\n")))}p.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(u,".").concat(m)]||s[m]||b[m]||i;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<i;l++)u[l]=n[l];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);