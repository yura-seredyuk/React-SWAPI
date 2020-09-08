export default class SwapiService {
    apiBase = 'https://swapi.dev/api'
    async getResourse(url){
      const res = await fetch(`${this.apiBase}${url}`);
      return await res.json();; 
    }
    async getAllPeople(){
      const n = await  this.getResourse('/people/');
      return n;
    }
    async getPeople(id){
      const n = await this.getResourse(`/people/${id}`)
      return n;
    }
     getAllPlanets = async ()=>{
      const n = await  this.getResourse('/planets/')
      return n.results.map(this.transformPlanet);
    }
     getPlanet = async (id)=>{
      const planet = await  this.getResourse(`/planets/${id}`)
      console.log(planet)
      return this.transformPlanet(planet);
    }
    async getAllStarships(){
      const n = await  this.getResourse('/starships/')
      return n;
    }
    async getStarship(id){
      const n = await  this.getResourse(`/starships/${id}`)
      return n;
    }
    extractId(item){
      const regId = /\/([0-9]*)\/$/; //регулярний вираз
      return item.url.match(regId)[1]; // витягування ідентифікатора з url адреси
    }
    transformPlanet = (planet) =>{
      return{
        id:this.extractId(planet),
        name:planet.name,
        population:planet.population,
        rotationPeriod:planet.rotation_period,
        diameter:planet.diameter
      }
    }
  }

  // const people = new SwapiService();
  // people.getAllPeople(2).then((body)=>{
  //   console.log(people)
  // })
  // const getResourse = async (url)=>{
  //   const res = await fetch(url);
  //   const body = await res.json();
  //   return body;
  // }
  
  // const getAllPeople = () => {
  //   const people = getResourse('http https://swapi.dev/api/people/')
  // }
  // const getPeople = () => {
  //   const people = getResourse('http https://swapi.dev/api/people/2/')
  // }