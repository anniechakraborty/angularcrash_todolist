export interface Task{
    // we are creating an interface so that we can set a specific structure for all the tasks .
    // interface is almost like a class (remind on Angular interface later).
    // export is used so that we can use this interface in other files.

    id? : number;
    // the '?' after id indicates that this field is optional. it is done because when we first create 
    // a task there will be no id, the id is to be added by the json server (our dev backend). so that 
    // compilation doesn't throw an error wwhen we do not give an id while creating a task, 
    // we are making the field optional.

    text : string;
    day : string;
    reminder : boolean;
}