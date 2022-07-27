package lk.easy.rental.repo;

import lk.easy.rental.entity.File;
import lk.easy.rental.enums.ReferencedType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepo extends JpaRepository<File,Integer> {

    boolean existsByReferencedIdAndReferencedType(String referencedId, ReferencedType referencedType);

    File findByReferencedIdAndReferencedType(String referencedId, ReferencedType referencedType);


}
