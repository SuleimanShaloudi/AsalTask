export class Reservation {
    res_id: number;
    from_time: string;
    to_time: string;
    by: string;
    title: string;

    constructor(res_id: number, from_time: string, to_time: string, by: string, title: string) {
        this.res_id = res_id;
        this.from_time = from_time;
        this.to_time = to_time;
        this.by = by;
        this.title = title;
    }

    toString(): string {
        return this.res_id + ' is for ' + this.title + 'now';
    }



}
