package lk.easy.rental.advisor;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {

    @ExceptionHandler({Exception.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity exceptionHandle(Exception e){
        return new ResponseEntity(new ResponseUtil(500,e.getMessage(),null),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({DuplicateEntryException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ResponseUtil> duplicateEntryExceptionHandle(Exception e){
        return new ResponseEntity(new ResponseUtil(400,e.getMessage(),null),HttpStatus.BAD_REQUEST);
    }



}
