package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.FileDTO;
import lk.easy.rental.enums.ReferencedType;
import lk.easy.rental.repo.FileRepo;
import lk.easy.rental.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.util.StringUtils;

import javax.transaction.Transactional;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
@Transactional
public class FileServiceImpl implements FileService {

    private String fileUploader = "uploads";

    @Autowired
    FileRepo fileRepo;


    @Override
    public ResponseEntity<?> store(FileDTO fileDTO) throws IOException, Exception {
        if (fileDTO.getFileCategory().equals(ReferencedType.NIC)||fileDTO.getFileCategory().equals(ReferencedType.LICENSE_NO)){
            if (fileRepo.existsByReferencedIdAndReferencedType(fileDTO.getReferencedId(), fileDTO.getFileCategory()))
                throw new DuplicateEntryException("File Already Exists");
        }
        String dirName = "D://Sem 2/Internet Technologies/AAD/Easy_Car_Rental_System/uploads/";
        String fileName = UUID.randomUUID() + "." + StringUtils.getFilenameExtension(fileDTO.getUploadFile().getOriginalFilename());
        File uploadsDir = new File( dirName);
        if (!uploadsDir.exists())
            uploadsDir.mkdir();
        String filePath = dirName.concat(fileName);
        Path path = Paths.get(filePath);
        byte[] fi = fileDTO.getUploadFile().getBytes();
        Files.write(path,fi);

        lk.easy.rental.entity.File file = new lk.easy.rental.entity.File(fileDTO.getReferencedId(), fileDTO.getFileCategory(), filePath);
        fileRepo.save(file);

        return ResponseEntity.ok().build();
    }

    @Override
    public byte[] getFile(String referencedId, ReferencedType referencedType) throws IOException {
        lk.easy.rental.entity.File file = fileRepo.findByReferencedIdAndReferencedType(referencedId, referencedType);
        if (file == null) {
            throw new DuplicateEntryException("Not Such a File");
        }
        File file1 = new File(file.getFilePath());
        FileInputStream fileInputStream = new FileInputStream(file1);
        return StreamUtils.copyToByteArray(fileInputStream);
    }
}
