# CheapLithium-Frontend

CheapLithium-Fontend is s a simple decision tree modelling frontend. At the moment this is a
completely private educational project and not fit for any purpose whatsoever.

## The Idea

Often I would like to use the knowledge of others and streamline some analysis work.
Decision trees are a common tool to help newbies to perform certain analysis tasks in 
the first, second and third level support. This applies to all kind of analysis work.

A decision tree can help to divide and conquer until a problem can be identified, by
providing questions, answers and some kind of knowledge base. Another approach is, to
tailor a report from the steps taken and the nodes visited and compile that into an 
analysis report.

Having machine intelligent tasks (MIT) and human intelligent tasks (HIT), makes a 
decision tree and converts it into a workflow engine. Which can analyze problems
on its own.

I implemented such things more than a decade ago, but I realized I still need such a 
tool to optimize hard to reproduce and difficult analysis tasks. And preserve knowledge
and help people to not write the same kind of analysis again and again.

Combining multiple small decision trees, with small decisions each and running 
subsequent trees in a thread of trees, makes it into a bigdecisiontree, which can
be used across different teams, and learn from other teams.

This whole thing is an Angular based modelling tool, working against a simple backend
which does all the persistence of the models. As for me speaking I currently do not 
focus on developing the backend, instead I want this UI to be as usable as fast as 
possible. I don't care whether this models are later persisted into databases, files
or anything alike. But for developing this application a simple Python based FastAPI
backend will do the job.

A backend-project is started. you can find it under CheapLithium-Backend.

## Running

Run this SearchFrontend via `ng serve --proxy-config=proxy.conf.json` then visit http://localhost:4200

Or just use the provided batchfile (runFrontend.bat).


## License

Usage is provided under the [MIT License](http://opensource.org/licenses/mit-license.php). See LICENSE for the full details.
