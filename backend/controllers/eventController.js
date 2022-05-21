
const Event=require( "../models/eventModel" );
const catchAsync=require( "../utils/catchAysnc" );
const AppError=require( "../utils/appError" );
const factory=require( './FactoryHandler' );


//Todo:  ********* helper functuions ***********






exports.createEvent=catchAsync( async ( req, res, next ) => {
  
  if(req.body.communityID && req.body.veteranID)
  return next( new AppError( "You are not allowed to perform this action", 403 ) )

  if(req.body.veteranID)
  req.body.eventStars=null;


  const doc=await Event.create( req.body );
  console.log( doc )
  res.status( 201 ).json( {
      status: 'success',
      data: doc
  } );


  //? (2) Send the delete response with 204 code
  res.status( 200 ).json( {
    status: "success",
    data: "Hello World!"
  } )

} )


// Optimize: get all 
exports.getAllEvents=factory.getAll( Event );

// Optimize: get single data basaed on id
exports.getSingleEvent=factory.getOne( Event );

// Optimize: update based on id 
exports.updateEvent=factory.updateOne( Event )

// Optimize: delete  based on id 
exports.deleteEvent=factory.deleteOne( Event );