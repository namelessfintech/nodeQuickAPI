
const jobs = require("../config/jobs");
// imports the jobs model to connect with the controller:
const Job = require('../models/jobModel')

module.exports = {

    create(req, res){
        // get the title  from the request body
        let title = req.body.title;
        // get the description from the request body
        let description = req.body.description;

        // add validation for title property
        if(!title){
            return res.status(400).send(err)
        }

        // compose a job object form req params
        let job = {
            title,
            description
        };

        // create a new job schema and pass it my job object
        let newJob = new Job(job)

        // save the new job
        newJob.save((err) => {
            // pass in status code in err handling
            if(err){
                return res.status(500).send(err);
            }
        });
        console.log("New job has been saved")
        // return the a 200 status code if passed
        return res.status(200).json(newJob);
    }, 
    findAll(req, res){
        // begin finishing here...


        // call the find method of Job Model
        Job.find({},(err,jobs) => {
            // if  error occurred  send error with 404 status code
            if(err){
                return res.status(404).send(err)
                console.error(err)
            }
            return res.status(200).json(jobs)
        })

            

        // return all the jobs to the server with 200 status code
    }
};