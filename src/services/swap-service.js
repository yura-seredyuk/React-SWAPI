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
    async getAllPlanets(){
      const n = await  this.getResourse('/planets/')
      return n;
    }
    async getPlanet(id){
      const n = await  this.getResourse(`/planets/${id}`)
      return n;
    }
    async getAllStarships(){
      const n = await  this.getResourse('/starships/')
      return n;
    }
    async getStarship(id){
      const n = await  this.getResourse(`/starships/${id}`)
      return n;
    }
  }
  const people = new SwapiService();
  people.getAllPeople(2).then((body)=>{
    console.log(people)
  })
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