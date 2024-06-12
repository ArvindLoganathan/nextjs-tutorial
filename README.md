# nextjs-tutorial

next is framework . which has own router  , transform and minify . 

need node js runtime.

RSC  React server component is foundation for next js. 
2 types of component  server(default type) & client component.(add event, use react hooks)


Note:
1). Routes are defined based on folder structure and folder should have page.tsx file or route.tsx file. Nested route slod we need to create folder inside folder with page.tsx inside
2).For dynamic route we need to use [id] as folder name inside we have to add page.tsx(E:\project\nextjs-tutorial\nextdemo\app\users\[id]\page.tsx)
3).





Additional Note:
1). folder struicture act as route in next js and page.tsx file is used for routing
2). use Link instead of <a> tag as it reloads all resources 
3). css file inside is not accessable for other route inorder to access need to use as global css
4). add "use Client" at top if we need browser events  (vl increase bundle size)
5). avoid states and useeffect  on server as it increases bundle size.
6). for production build fetch api is default {cache: 'force-cache'}, we need to either use { next: { revalidate: 3600 } } or {cache: 'no-store'} to make dynamic rerender.