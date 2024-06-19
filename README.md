# nextjs-tutorial

next is framework . which has own router  , transform and minify . 

need node js runtime.

RSC  React server component is foundation for next js. <br>
2 types of component  server(default type) & client component.(add event, use react hooks)


Note:
1). Routes are defined based on folder structure and folder should have page.tsx file or route.tsx file. Nested route slod we need to create folder inside folder with page.tsx inside.<br>
2).For dynamic route we need to use **[id]** as folder name inside we have to add page.tsx(E:\project\nextjs-tutorial\nextdemo\app\users\[id]\page.tsx). nested dynamic route also similar pattern (rfi/rfiId/section/sectionId/question/Qid)<br>
3).**[...slug]** catch all dynamic route to handle in one page. [[...slug]]  handle optional route( **/user** doesn't have page.tst throws pagenot found error when accessed [[...slug]] will catch that not found on /user route)<br>
4). **not-found.tsx** is used to customize page not found similar **error.tst ("use client" as it executed on csr)** used for display cutom error page(also provide reset function to reset screen ) on browser if any error is thrown then bubbled to nearest error.tsx. if error in layout it will bubbled to parent level to to same level.<br>
5). if file namr start with **_** then its considered as lib not as route and alos if folder doesn't have page/route.tsx then also react router won't considered for routing. <br>
6). **(foldername)** is used for grouping of route. foldername will not be displayed in url.<br>
7). layout.tsx will always wrap the corresponding page.tsx file at each level. similarly not-found.tsx will be called close to it brfore global file.<br>FOr group layout we can add layout.tsx to route group.<br> 
8). metadata we can add title & description usesful for SEO. we can export static(static page) / dynamic metadata(dynamic page  eg:[id] use generateMetadata function). page always take preceedance over layout metadata.Between different layout near layout take precedance.metadata cannot be present inside client component <br>
Title can be set by return title object as **default(falback when child route has not title meta),template(child title + title as template specied in near layout ),absolute(overide any other title )** .<br>
9). to show Active link in browser we can use **usePathname()** but component should be clinet("use client") 
const pathName=usePathname();
const isActive=pathName.startswith('dashboard') // then css work <br>
10).Layout preserve state where **Template.tsx** doesn't preserve state it remount when route change.Template create a new instance. if we have both then layout wraps template with page.<br>
11). Loading.tsx file create a suspence of page.tsx to show loading inncase of async call.<br>
12). **Parallel Routes** like questionnaire page in gartner(sidebar & main content).**@** symbol is used t0 crate a **slot**. parallel route preserve previous state while navigation, but on hard refresh it looks for **default.js** file if exist render or else page not found-404  <br>
**default.js** file act as fallback slot on current url so need to create default.tsx file on slot.(E:\project\nextjs-tutorial\nextdemo\app\question).<br>
13).Intersepting route is used to intercept route from orgin to endpoint point to specified route using link tag(either .(same level),..(one level up) , (..)(..)(two level) , (...)(from root directory)) based on folder name present. if hard refresh is done then it should point to original endpoint.<br>
14).**Route Handler** to create custom endpoint to act as rest endpoint(like node we can create CRUD end point or make bd call & return).we need to use route.ts file for it. if we had conflict between page route i.e page.tsx vs route.ts file (route.ts handle by default).<br>
Request is used for normal request header. where NextRequest provide searchparm,read headers,cookies and additional middleware support.<br> 
15). redirect in rest call we have to use redirect from **next/navigation** throws 307 with temporary redirect.<br>
16).returning new Date().toLocaleTimeString() on api response on dev response will be dynamic but on prod build it will be static. to make it dynamic we need to add **export const dynamic = "force-dynamic"**called as route-segment-config <br>
if we use cookies,header,useSearchParams from request obj or if we use request with get req or http method then GET, in route function then its follow dynamic won't catch
17).**Middleware** provide custom match config and conditional statement to intercept the request,redirect(url will change),rewrite(route will happen without url change),authentication,header,cookies management etc.<br>

18)Rendering:
**client Side:**<br>
CSR(client side rendering),SSR(server side rendering), RSC(React server component)
why CSR is not good for SEO becasue it has only one div on page load. rest is appened by js after download. Slow load time<br>
<br>

**Server side:**<br>
a). SSG(static site generation)
b). SSR

SSR immediatly see the page as its already pre rendered and download as html and hydrate the event if required. we need to be careful on placement of interactive elemt (dynamic hydartion)
<br>
drawback- we need to fecth everthing before wwe can show everything.(fecth data), All or notjing waterfall.
<br>
To overcome above we use **Suspense ssr Archeture** to wrap lazy loading HTML streamming with selective hydration on client. We can also use code spliting react lazy loading.so partial hydration can take place. still for hydration tocomplete takes time when page is large.<br>

<br>
**Evolution:**
<br>CSR->SSR->suspense SSR->RSC
<br>

**RSC** - strengthen and optimized both client and server side. They are rendered on CSR but partial rendering happen on server side to load initial content(optimized strategy).<br>
It enhacne security can opt caching etc.<br>
 2 component 
<br>
a).Server component(default) - no client event and state & useeffect.
b). client component("use client") - prerender once on server and rendered on client.

client component console will be print twice as react run dev in strict mode. App router is build on RSC Architecture.<br>

Rendering stretegy:
1) static rendering- build once & cache by cdn in production mode, default in app router.
2) Dynamic rendering-
3) streaming-



<br>
Additional Note:<br>
1). folder struicture act as route in next js and page.tsx file is used for routing.<br>
2). use Link instead of <a> tag as it reloads all resources.<br>
3). css file inside is not accessable for other route inorder to access need to use as global css.<br>
4). add "use Client" at top if we need browser events  (vl increase bundle size).<br>
5). avoid states and useeffect  on server as it increases bundle size.<br>
6). for production build fetch api is default {cache: 'force-cache'}, we need to either use { next: { revalidate: 3600 } } or {cache: 'no-store'} to make dynamic rerender.<br>