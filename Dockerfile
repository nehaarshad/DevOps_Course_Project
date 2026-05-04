FROM node:18-alpine AS build      
WORKDIR /myApp                      
COPY package*.json ./              
COPY . .                           
RUN npm install                     
EXPOSE 3000     
RUN npm run build                   
CMD ["npm", "start"]               

FROM nginx:stable-alpine AS production   
WORKDIR /usr/share/nginx/html            
COPY --from=build /myApp/build /usr/share/nginx/html   
EXPOSE 80                               
CMD [ "nginx", "-g", "daemon off;" ]     

