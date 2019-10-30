import { Link } from './link';

export class Footer {
    title: string;
    year: string;
    logo: string;
    links: Link[];

    constructor(title: string, year: string, logo: string, links: Link[]){
        this.title = title;
        this.year = year;
        this.logo = logo;
        this.links = links;
    }
}

