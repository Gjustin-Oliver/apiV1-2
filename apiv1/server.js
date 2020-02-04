sc = "JOHN0000MICHAEL0009994567";

if(responsecode != 200)
throw new RuntimeException("HttpResponseCode: " +responsecode);
else
{

}

Scanner = new Scanner(url.openStream());
while(sc.hasNext())
{
    inline+=sc.nextLine();
}
System.out.println("\nJSON data in string format");
System.out.println(inline);
sc.close();

