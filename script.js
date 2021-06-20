function addNewWeSection() {
  let newWorkSection = document.createElement("div");
  newWorkSection.classList.add('work-section');
  newWorkSection.classList.add("mt-2");
  newWorkSection.innerHTML = 
  `
  <div class="row">
                  <div class="col-md-6">
                    <label for="">Timeline:</label>
                    <input
                      type="text"
                      class="form-control timeline"
                      placeholder="month,20xx - month,20xx"
                    />
                    <label for="">Company:</label>
                    <input
                      type="text"
                      class="form-control company"
                      placeholder="name of company"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Type:</label>
                    <input
                      type="text"
                      class="form-control type-of-job"
                      placeholder="Internship, full time, WFH"
                    />
                    <label for="">Designation:</label>
                    <input
                      type="text"
                      class="form-control designation"
                      placeholder="designation"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label for="">About Internship/ Work : </label>
                    <textarea
                      class="form-control about-work"
                      placeholder="about the job"
                    ></textarea>
                  </div>
                </div>
              </div>
  `;
  let workExperienceSection = document.getElementById('workExperienceSection');
  let addWEbutton = document.getElementById('add-WE-button');
  workExperienceSection.insertBefore(newWorkSection,addWEbutton);
}
