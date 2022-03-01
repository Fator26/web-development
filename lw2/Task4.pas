PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  QueryString: STRING;
  EndValue: CHAR;
  ValuePos, KeyLength, I: INTEGER;
BEGIN{GetQueryStingParameter}
  QueryString := GetEnv('QUERY_STRING');
  EndValue := 'F';
  KeyLength := Length(Key) + 1;
  ValuePos := Pos(Key, QueryString);
  GetQueryStringParameter := ' ';
  IF ValuePos <> 0
  THEN
    BEGIN
      FOR I := ValuePos+KeyLength TO Length(QueryString)
      DO
         BEGIN
           IF QueryString[I] = '&'
           THEN
             EndValue := 'T';
           IF EndValue = 'F'
           THEN
             GetQueryStringParameter := GetQueryStringParameter + QueryString[I]
         END
    END
END;{GetQueryStingParameter}

BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plan');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}
