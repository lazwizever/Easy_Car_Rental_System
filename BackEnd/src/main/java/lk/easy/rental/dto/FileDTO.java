package lk.easy.rental.dto;

import lk.easy.rental.enums.ReferencedType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class FileDTO {

    private String referencedId;
    private MultipartFile uploadFile;
    private ReferencedType fileCategory;

}
