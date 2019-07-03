
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
        let newJob = new Job(job);

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

        // call the find method of Job Model
        Job.find({},(err,jobs) => {
            // if  error occurred  send error with 404 status code
            if(err){
                return res.status(404).send(err);
    
            }
            return res.status(200).json(jobs);
        })
        
    },

    find(req, res){

        let id = req.params.id;

        if (!id){
            res.status(400).send({err: 'id is required field'});
        }

        Job.findById(id,(err, job)=>{
            if (err){
                return res.status(404).send(err)
               
            }
            return res.status(200).send(job)
        })
    },

    update(req, res){
        let id = req.params.id;
        let title = req.body.title;
        let description = req.body.description;

        let newJob = {};

        if (title){
            newJob.title = title;
        }

        if (description){
            newJob.description = description
        }

        // call the update method to edit a job
        Job.updateOne({_id:id}, newJob,(err, result)=>{
            if(err) {
                return res.status(500).send(err)
            }
            console.log(description)
            return res.status(200).json({msg:`The job with id ${id} has been updated`});
        })

    },

    delete(req, res){
        // get the id from req params
        let id = req.params.id ;
    
        // call findByIdAndRemove method
        Job.findByIdAndRemove(id, (err)=>{
            if(err){
                // if error comes then send 500 status with error
                console.error(err)
                return res.status(500).send(err)
            }
             // if ok, send msg of deletion
            return res.status(200).json({msg:'The Job has been deleted'})
        })   
    }
};