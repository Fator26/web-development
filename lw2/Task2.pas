PROGRAM SarahRevere(INPUT, OUTPUT);
USES DOS;
VAR
  Query: STRING;
  Lanterns: CHAR;
BEGIN {PrintHello}
  WRITELN('Content-Type: text/plan');
  WRITELN;
  Query := GetEnv('QUERY_STRING');
  Lanterns := Query[Length(Query)];
  IF Lanterns = '1'
  THEN
    WRITELN('The British coming by sea.')
  ELSE
    WRITELN('The British coming by land.');
END. {PrintHello}
