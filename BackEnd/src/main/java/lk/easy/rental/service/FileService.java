package lk.easy.rental.service;

import lk.easy.rental.dto.FileDTO;
import lk.easy.rental.enums.ReferencedType;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

public interface FileService {

    ResponseEntity<?> store(FileDTO fileDTO) throws IOException, Exception;

    byte[] getFile(String referencedId, ReferencedType referencedType) throws IOException;

}
