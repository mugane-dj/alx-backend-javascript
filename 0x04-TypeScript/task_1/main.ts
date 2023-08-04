interface Teacher {
    readonly firstName: string; // Only modified when the object is instantiated
    readonly lastName: string;
    fullTimeEmployee: boolean; // Always defined
    yearsOfExperience?: number; // Optional attribute
    location: string;
    [propName: string]: boolean | number | string; // Index signature to allow extra attributes
}