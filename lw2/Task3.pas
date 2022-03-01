PROGRAM HelloDear(INPUT, OUTPUT);
USES
  DOS;
VAR
  PosValue, StringLen: INTEGER;
  UserName: STRING;
BEGIN {PrintHello}
  StringLen := 0;
  WRITELN('Content-Type: text/plan');
  WRITELN;
  UserName := GetEnv('QUERY_STRING');
  PosValue := Pos('name' ,UserName);
  IF PosValue <> 0
  THEN  
    BEGIN
      StringLen := Length(UserName) - 5;
      IF StringLen <> 0
      THEN
        BEGIN
          Delete(UserName, 1, 5);
          WRITELN('Hello dear, ', UserName)
        END
      ELSE
        WRITELN('Hello Anonymous')
    END
  ELSE
    WRITELN('Hello Anonymous')
END. {PrintHello}







