

export interface IJob {
    Title: string,
    JobSpecification: string,
    JobLocation: string,
    OfferRelocation: boolean,
    JobTags: string,
    JobType: string,
    ModifiedOn: Date,
    CreatedOn: Date,
    FeaturedJob: boolean,
    Active: boolean,
    Employer: IEmployer
}

export interface IEmployer {
    id: number,
    FirstName: string,
    LastName: string,
    Username: string,
    Company: string,
    Active: boolean,
    LastActive: Date,
    Block: boolean,
    Email: string,
    Contact: string,
    ReceiveAlert: boolean
    
}