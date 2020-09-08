export default class SwapiService {
    apiBase = 'https://swapi.dev/api'
    async getResourse(url){
      const res = await fetch(`${this.apiBase}${url}`);
      return await res.json();; 
    }
    getAllPeople = async () =>{
      const n = await  this.getResourse('/people/');
      return n.results.map(this.transformPeople);
    }
    getPeople = async (id) =>{
      const people = await this.getResourse(`/people/${id}`)
      return this.transformPeople(people);
    }
    getAllPlanets = async ()=>{
      const n = await  this.getResourse('/planets/')
      return n.results.map(this.transformPlanet);
    }
    getPlanet = async (id)=>{
      const planet = await  this.getResourse(`/planets/${id}`)
      // console.log(planet)
      return this.transformPlanet(planet);
    }
    getAllStarships = async () =>{
      const n = await  this.getResourse('/starships/')
      return n.results.map(this.transformStarship);
    }
    getStarship = async (id) =>{
      const starship = await  this.getResourse(`/starships/${id}`)
      return this.transformStarship(starship);
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
        orbitalPeriod:planet.orbital_period,
        diameter:planet.diameter,
        gravity:planet.gravity,
        terrain:planet.terrain,
        surfaceWater:planet.surface_water,
        climate:planet.climate
      }
    }
    transformStarship = (starship) =>{
      return{
        id:this.extractId(starship),
        name:starship.name,
        model:starship.model,
        manufacturer:starship.manufacturer,
        class:starship.starship_class,
        cost:starship.cost_in_credits,
        speed:starship.max_atmosphering_speed,
        hyperdriveRating:starship.hyperdrive_rating,
        MGLT:starship.MGLT,
        length:starship.length,
        cargoCapacity:starship.cargo_capacity,
        mimimumCrew:starship.crew,
        passengers:starship.passengers
      }
    }
    transformPeople = (people) =>{
      return{
        id:this.extractId(people),
        name:people.name,
        birthYear:people.birth_year,
        species:people.species,
        height:people.height,
        mass:people.mass,
        gender:people.gender,
        hairColor:people.hair_color,
        skinColor:people.skin_color,
        homeworld:this.getPlanet(this.extractId(people)).name
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