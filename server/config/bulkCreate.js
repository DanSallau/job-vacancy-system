
const encryption = require('../utilities/encryption');
const salt1 = encryption.createSalt();
const salt2 = encryption.createSalt();
const salt3 = encryption.createSalt();

module.exports = {
    job: [
        {
            Title: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
            JobSpecification: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
            JobLocation: 'CyberJaya',
            OfferRelocation: true,
            JobTags: 'Software Engineer, Front End',
            JobType: 'Permanent',
            FeaturedJob: true
        },
        {
            Title: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
            JobSpecification: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
            JobLocation: 'Selangor',
            OfferRelocation: true,
            JobTags: 'Software Engineer, Front End',
            JobType: 'Permanent',
            FeaturedJob: true
        },
        {
            Title: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
            JobSpecification: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
            JobLocation: 'Selangor',
            OfferRelocation: true,
            JobTags: 'Software Engineer, Front End',
            JobType: 'Permanent',
            FeaturedJob: true
        },
        {
            Title: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
            JobSpecification: 'Typescript Reflect.getMetadata design:type returns Object instead of Date without angular testbed',
            OfferRelocation: true,
            JobTags: 'Software Engineer, Front End',
            JobType: 'Permanent',
            JobLocation: 'Selangor',
            FeaturedJob: true
        }
    ],
    employer: [
        {
            FirstName: 'Masud',
            LastName: 'Salihu',
            Username: 'masud',
            Company: 'Ezypay Pty Ltd',
            active: true,
            Email: 'masud@yahoo.com',
            PassHash: encryption.hashPwd(salt1, 'password123'),
            Salt: salt1,
            Token: encryption.getToken(),
            Contact: '0102443167',
            Address: 'xxxxxxxx',
            ReceiveAlert: true
        },
        {
            FirstName: 'Nuru',
            LastName: 'Salihu',
            Username: 'nuru',
            Company: 'CCCC Pty Ltd',
            Active: false,
            Email: 'nuruddeensalihu@yahoo.com',
            PassHash: encryption.hashPwd(salt2, 'password123'),
            Salt: salt2,
            Role: 'admin',
            Token: encryption.getToken(),
            Contact: '0102443167',
            Address: 'xxxxxxxx',
            ReceiveAlert: true
        },
        {
            FirstName: 'Siraj',
            LastName: 'Salihu',
            Username: 'siraj',
            Company: 'CCCC Pty Ltd',
            Active: true,
            Email: 'siraj@yahoo.com',
            PassHash: encryption.hashPwd(salt3, 'password123'),
            Salt: salt3,
            Role: 'premium',
            Token: encryption.getToken(),
            Contact: '0102443167',
            Address: 'xxxxxxxx'
        }

    ]

}