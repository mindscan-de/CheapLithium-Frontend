export class BackendKBArticle {
	
	// use the uuid for linking with url
	public uuid : string = "";
	// use the pagetitle for linking (text=)
	public pagetitle : string = "Page Title";
	
	public pagecontent : string = "content";
	
	public pagesummary : string = "abstract of the content";
	
	public revision : number = 1;

	// this should be date time, but it is basically only time in seconds and fractions - anyways good enough fo now	
	public created : string = "";
	public modified : string = "";
	
	
	// cotains Rationale WHY - why to do
	// contains WHAT - what to do
	// contains HOW - howto
	// parent page?

	// public description : "";
	// public howto: string = ""; 
}
