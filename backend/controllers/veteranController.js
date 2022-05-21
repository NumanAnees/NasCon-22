// const multer=require( 'multer' );
// const sharp=require( 'sharp' );
const User=require( "../models/veteranModel" );
const catchAsync=require( "../utils/catchAysnc" );
const AppError=require( "../utils/appError" );
const factory=require( './FactoryHandler' );
const Veteran=require( "../models/veteranModel" );


//Todo:  ************************** helper functuions ******************************

const filterObject=( obj, ...fields ) => {
    // eslint-disable-next-line prefer-const
    let newObj={};

    Object.keys( obj ).forEach( el => {
        if ( fields.includes( el ) ) {
            newObj[ el ]=obj[ el ];
        }
    } )
    return newObj;
}


//Optimize:                    ************** Route handler Functions ***************




//Fix: Update curently logged in user
exports.updateMe=catchAsync( async ( req, res, next ) => {

    // console.log(req.body);


    //? (1) Create error if user POSTs password data
    if ( req.body.password||req.body.passwordConfirm ) {
        return next( new AppError( "This URL is not for password updates. Please go to /updateMyPassword", 400 ) );
    }


    //? (2) Filtered out unwanted field names that are not allowed to be updated
    const filteredObj=filterObject( req.body);
    // console.log( req.file );
    // if ( req.file ) filteredObj.photo = req.file.filename;

    //? (3) update User document
    const updatedUser=await Veteran.findByIdAndUpdate( req.user._id, filteredObj, {
        new: true,
        // runValidators: true
    } )

    res.status( 201 ).json( {
        status: "success",
        user: updatedUser
    } )

} )



exports.getAllVeterans=catchAsync( async ( req, res, next ) => {

    // ! EXECUTE TlHE QUERRY
    let docs=await Veteran.find();





    // ! SENDING THE REPONSE
    res.status( 200 ).json( {
        status: 'success',
        data: docs
    } );

} );

// FIX: get single users basaed on id
exports.getVeteran=factory.getOne( User );

// FIX: get current user followed persons
exports.getVeteranFollowedPersons=catchAsync( async ( req, res, next ) => {

    const followedPeople=( await Veteran.findById( req.user._id ).select( 'followed' ) ).followed;


    let persons;
    
    // console.log( followedPeople );

   persons= followedPeople.map( async (el) => {
       return await Veteran.findById( el );

       
   } )
    
    
    const data=await Promise.all( persons )
  
    
    // console.log("=>>>>>",data)
    


    res.status( 200 ).json( {
        status: 'success',
        data
    } );



} )





// FIX:  followed persons
exports.FollowPerson=catchAsync( async ( req, res, next ) => {

    let followedPeople=( await Veteran.findById( req.user._id ).select( 'followed' ) ).followed;
  
    followedPeople.push( req.params.id )
    console.log(followedPeople)
  
    await Veteran.findByIdAndUpdate( req.user._id, { followed: followedPeople } );



    res.status( 200 ).json( {
        status: 'success',
    } );



} )