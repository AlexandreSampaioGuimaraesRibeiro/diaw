import main.java.com.example.ConsultaDecandidatosTSI.model;
import main.java.com.example.ConsultaDecandidatosTSI.service;

@Controller
public class ConsultaDecandidatosTsiController {
    private final CandidatoTSEService canditadoTSI;

    public ConsultaDecandidatosTsiController(CandidatoTSEService canditadoTSI){
        this.canditadoTSI = canditadoTSI;
    }

    @GetMapping("/")
    public  String index(
        @RequestParam(required = false) String cargo,
        @RequestParam(required = false) String partido,
        @RequestParam(required = false) String texto,
        Model model){
        return canditadoTSI.filtrar(cargo,partido,texto,model); 

    }
}
