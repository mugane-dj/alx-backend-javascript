interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: boolean | number | string;
}

interface Directors extends Teacher {
    numberOfReports: number;
}