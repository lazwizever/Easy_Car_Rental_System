package lk.easy.rental.controller;


import lk.easy.rental.dto.FileDTO;
import lk.easy.rental.enums.ReferencedType;
import lk.easy.rental.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("file")
@CrossOrigin
public class FileController {

    @Autowired
    FileService fileService;

    @PostMapping(produces = MediaType.MULTIPART_FORM_DATA_VALUE)
    ResponseEntity saveFile(FileDTO fileDTO) throws Exception {
        return fileService.store(fileDTO);
    }

    @GetMapping("/{referencedId}/{referencedType}")
    public ResponseEntity getAllImagesFromDatabase(@PathVariable String referencedId, @PathVariable ReferencedType referencedType) throws IOException, IOException {
        byte[] file = fileService.getFile(referencedId, referencedType);
        return ResponseEntity.ok(file);
    }

}
