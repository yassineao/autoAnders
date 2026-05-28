package Gloyoo.AutoAnders.Cars.entity;

import jakarta.persistence.*;
import lombok.*;
import org.apache.catalina.Engine;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cars")
public class Car {
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    UUID id;


    private String title;
    private String subtitle;

    private Integer yearOfManufacture;
    private Integer mileage;
    private String power;
    private String referenceNumber;
    private BigDecimal price;

    private LocalDate firstRegistrationDate;
    private Integer numberOfDoors;
    private Integer wheelbase;
    private Integer numberOfCylinders;
    private String motorVehicleTax;
    private LocalDate modelDateFrom;
    private LocalDate modelDateTo;
    private Integer maxTowingWeight;
    private Integer maxTowingWeightUnbraked;
    private BigDecimal urbanFuelConsumption;
    private BigDecimal combinedFuelConsumption;
    private BigDecimal motorwayFuelConsumption;
    private Integer co2Emissions;
    private Boolean taxDeductible;
    private String chassisNumber;
    private Integer numberOfKeys;

    private String licensePlate;
    private Integer engineDisplacement;
    private String colour;
    private Integer emptyWeight;
    private Integer taxAdditionPercentage;
    private String apkMotDate;
    private Boolean serviceDocumentation;
    private String location;

    private BigDecimal financialLeasePricePerMonth;
    private BigDecimal leasePrice60Months;
    private BigDecimal leasePrice48Months;
    private BigDecimal leasePrice36Months;

    private BodyType bodyType;
    private Gearbox gearbox;
    private Fuel fuel;
    private EmissionClass emissionClass;
    private EnergyLabel energyLabel;
    private PaintType paintType;
    private Upholstery upholstery;

    public Car(String title, String subtitle, Integer integer, Integer mileage, String power, String s, BigDecimal price, LocalDate localDate, Integer integer1, Integer wheelbase, Integer integer2, String s1, LocalDate localDate1, LocalDate localDate2, Integer integer3, Integer integer4, BigDecimal bigDecimal, BigDecimal bigDecimal1, BigDecimal bigDecimal2, Integer integer5, Boolean aBoolean, String s2, Integer integer6, String s3, Integer integer7, String colour, Integer integer8, Integer integer9, String s4, Boolean aBoolean1, String location, BigDecimal bigDecimal3, BigDecimal bigDecimal4, BigDecimal bigDecimal5, BigDecimal bigDecimal6, BodyType bodyType, Gearbox gearbox, Fuel fuel, EmissionClass emissionClass, EnergyLabel energyLabel, PaintType paintType, Upholstery upholstery) {
    this.title = title;
    this.subtitle = subtitle;
    this.yearOfManufacture = integer;
    this.mileage = mileage;
    this.power = power;
    this.referenceNumber = s;
    this.firstRegistrationDate = localDate1;
    this.numberOfDoors = integer2;
    this.wheelbase = wheelbase;
    this.numberOfCylinders = integer3;
    this.motorVehicleTax = s1;
    this.modelDateFrom = localDate1;
    this.modelDateTo = localDate2;
    this.maxTowingWeight = integer4;
    this.maxTowingWeightUnbraked = integer5;
    this.urbanFuelConsumption = bigDecimal1;
    this.combinedFuelConsumption = bigDecimal2;
    this.motorwayFuelConsumption = bigDecimal3;
    this.co2Emissions = integer6;
    this.taxDeductible = aBoolean1;
    this.chassisNumber = s1;
    this.numberOfKeys = integer7;
    this.licensePlate = s1;
    this.engineDisplacement = integer9;
    this.colour = colour;
    this.emptyWeight = integer8;
    this.taxAdditionPercentage = integer9;
    this.apkMotDate = s1;
    this.serviceDocumentation = aBoolean1;
    this.location = location;
    this.financialLeasePricePerMonth = bigDecimal1;
    this.leasePrice60Months = bigDecimal2;
    this.leasePrice48Months = bigDecimal3;
    this.leasePrice36Months = bigDecimal4;
    this.bodyType = bodyType;
    this.gearbox = gearbox;
    this.fuel = fuel;
    this.emissionClass = emissionClass;
    this.energyLabel = energyLabel;
    this.paintType = paintType;
    this.upholstery = upholstery;


    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public Integer getYearOfManufacture() {
        return yearOfManufacture;
    }

    public void setYearOfManufacture(Integer yearOfManufacture) {
        this.yearOfManufacture = yearOfManufacture;
    }

    public Integer getMileage() {
        return mileage;
    }

    public void setMileage(Integer mileage) {
        this.mileage = mileage;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public String getReferenceNumber() {
        return referenceNumber;
    }

    public void setReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public LocalDate getFirstRegistrationDate() {
        return firstRegistrationDate;
    }

    public void setFirstRegistrationDate(LocalDate firstRegistrationDate) {
        this.firstRegistrationDate = firstRegistrationDate;
    }

    public Integer getNumberOfDoors() {
        return numberOfDoors;
    }

    public void setNumberOfDoors(Integer numberOfDoors) {
        this.numberOfDoors = numberOfDoors;
    }

    public Integer getWheelbase() {
        return wheelbase;
    }

    public void setWheelbase(Integer wheelbase) {
        this.wheelbase = wheelbase;
    }

    public Integer getNumberOfCylinders() {
        return numberOfCylinders;
    }

    public void setNumberOfCylinders(Integer numberOfCylinders) {
        this.numberOfCylinders = numberOfCylinders;
    }

    public String getMotorVehicleTax() {
        return motorVehicleTax;
    }

    public void setMotorVehicleTax(String motorVehicleTax) {
        this.motorVehicleTax = motorVehicleTax;
    }

    public LocalDate getModelDateFrom() {
        return modelDateFrom;
    }

    public void setModelDateFrom(LocalDate modelDateFrom) {
        this.modelDateFrom = modelDateFrom;
    }

    public LocalDate getModelDateTo() {
        return modelDateTo;
    }

    public void setModelDateTo(LocalDate modelDateTo) {
        this.modelDateTo = modelDateTo;
    }

    public Integer getMaxTowingWeight() {
        return maxTowingWeight;
    }

    public void setMaxTowingWeight(Integer maxTowingWeight) {
        this.maxTowingWeight = maxTowingWeight;
    }

    public Integer getMaxTowingWeightUnbraked() {
        return maxTowingWeightUnbraked;
    }

    public void setMaxTowingWeightUnbraked(Integer maxTowingWeightUnbraked) {
        this.maxTowingWeightUnbraked = maxTowingWeightUnbraked;
    }

    public BigDecimal getUrbanFuelConsumption() {
        return urbanFuelConsumption;
    }

    public void setUrbanFuelConsumption(BigDecimal urbanFuelConsumption) {
        this.urbanFuelConsumption = urbanFuelConsumption;
    }

    public BigDecimal getCombinedFuelConsumption() {
        return combinedFuelConsumption;
    }

    public void setCombinedFuelConsumption(BigDecimal combinedFuelConsumption) {
        this.combinedFuelConsumption = combinedFuelConsumption;
    }

    public BigDecimal getMotorwayFuelConsumption() {
        return motorwayFuelConsumption;
    }

    public void setMotorwayFuelConsumption(BigDecimal motorwayFuelConsumption) {
        this.motorwayFuelConsumption = motorwayFuelConsumption;
    }

    public Integer getCo2Emissions() {
        return co2Emissions;
    }

    public void setCo2Emissions(Integer co2Emissions) {
        this.co2Emissions = co2Emissions;
    }

    public Boolean getTaxDeductible() {
        return taxDeductible;
    }

    public void setTaxDeductible(Boolean taxDeductible) {
        this.taxDeductible = taxDeductible;
    }

    public String getChassisNumber() {
        return chassisNumber;
    }

    public void setChassisNumber(String chassisNumber) {
        this.chassisNumber = chassisNumber;
    }

    public Integer getNumberOfKeys() {
        return numberOfKeys;
    }

    public void setNumberOfKeys(Integer numberOfKeys) {
        this.numberOfKeys = numberOfKeys;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public Integer getEngineDisplacement() {
        return engineDisplacement;
    }

    public void setEngineDisplacement(Integer engineDisplacement) {
        this.engineDisplacement = engineDisplacement;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public Integer getEmptyWeight() {
        return emptyWeight;
    }

    public void setEmptyWeight(Integer emptyWeight) {
        this.emptyWeight = emptyWeight;
    }

    public Integer getTaxAdditionPercentage() {
        return taxAdditionPercentage;
    }

    public void setTaxAdditionPercentage(Integer taxAdditionPercentage) {
        this.taxAdditionPercentage = taxAdditionPercentage;
    }

    public String getApkMotDate() {
        return apkMotDate;
    }

    public void setApkMotDate(String apkMotDate) {
        this.apkMotDate = apkMotDate;
    }

    public Boolean getServiceDocumentation() {
        return serviceDocumentation;
    }

    public void setServiceDocumentation(Boolean serviceDocumentation) {
        this.serviceDocumentation = serviceDocumentation;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public BigDecimal getFinancialLeasePricePerMonth() {
        return financialLeasePricePerMonth;
    }

    public void setFinancialLeasePricePerMonth(BigDecimal financialLeasePricePerMonth) {
        this.financialLeasePricePerMonth = financialLeasePricePerMonth;
    }

    public BigDecimal getLeasePrice60Months() {
        return leasePrice60Months;
    }

    public void setLeasePrice60Months(BigDecimal leasePrice60Months) {
        this.leasePrice60Months = leasePrice60Months;
    }

    public BigDecimal getLeasePrice48Months() {
        return leasePrice48Months;
    }

    public void setLeasePrice48Months(BigDecimal leasePrice48Months) {
        this.leasePrice48Months = leasePrice48Months;
    }

    public BigDecimal getLeasePrice36Months() {
        return leasePrice36Months;
    }

    public void setLeasePrice36Months(BigDecimal leasePrice36Months) {
        this.leasePrice36Months = leasePrice36Months;
    }

    public BodyType getBodyType() {
        return bodyType;
    }

    public void setBodyType(BodyType bodyType) {
        this.bodyType = bodyType;
    }

    public Gearbox getGearbox() {
        return gearbox;
    }

    public void setGearbox(Gearbox gearbox) {
        this.gearbox = gearbox;
    }

    public Fuel getFuel() {
        return fuel;
    }

    public void setFuel(Fuel fuel) {
        this.fuel = fuel;
    }

    public EmissionClass getEmissionClass() {
        return emissionClass;
    }

    public void setEmissionClass(EmissionClass emissionClass) {
        this.emissionClass = emissionClass;
    }

    public EnergyLabel getEnergyLabel() {
        return energyLabel;
    }

    public void setEnergyLabel(EnergyLabel energyLabel) {
        this.energyLabel = energyLabel;
    }

    public PaintType getPaintType() {
        return paintType;
    }

    public void setPaintType(PaintType paintType) {
        this.paintType = paintType;
    }

    public Upholstery getUpholstery() {
        return upholstery;
    }

    public void setUpholstery(Upholstery upholstery) {
        this.upholstery = upholstery;
    }
}
