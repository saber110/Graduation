BINFILE = main
CC = g++
CXX = g++
DIR_INC = ./include
DIR_SRC = src
DIR_OBJ = obj
DIR_BIN = ./bin
BINTARGET = ${DIR_BIN}/${BINFILE}
ifdef VERBOSE
        Q =
        E = @true
else
        Q = @
        E = @echo
endif

CFILES := $(shell find $(DIR_SRC) -mindepth 1 -maxdepth 4 -name "*.c")
CXXFILES := $(shell find $(DIR_SRC) -mindepth 1 -maxdepth 4 -name "*.cpp")
INFILES := $(CFILES) $(CXXFILES)
OBJFILES := $(CXXFILES:$(DIR_SRC)/%.cpp=%) $(CFILES:$(DIR_SRC)/%.c=%)
DEPFILES := $(CXXFILES:$(DIR_SRC)/%.cpp=%) $(CFILES:$(DIR_SRC)/%.c=%)
OFILES := $(OBJFILES:%=$(DIR_OBJ)/%.o)

COMMONFLAGS := -Wall -Wextra -pedantic -O3
DEFINES := -fpic -Wl,-rpath=.
INCLUDE := -I. -I./include
LDFLAGS :=
LIBS    := -lwiringPi -Iusr/include/mysql -lmysqlclient

ifdef DEBUG
        COMMONFLAGS := $(COMMONFLAGS) -g
endif
CFLAGS := $(COMMONFLAGS)  $(DEFINES) $(INCLUDE)
CXXFLAGS := $(COMMONFLAGS) --std=c++0x $(DEFINES) $(INCLUDE)
DEPDIR := deps

all: $(BINTARGET)
ifeq ($(MAKECMDGOALS),)
-include Makefile.dep
endif
ifneq ($(filter-out clean, $(MAKECMDGOALS)),)
-include Makefile.dep
endif

-include Makefile.local

.PHONY: clean all depend
.SUFFIXES:
obj/%.o: src/%.c
	$(E) C-compiling $<
	$(Q) if [ ! -d `dirname $@` ]; then mkdir -p `dirname $@`; fi
	$(Q)$(CC) -o $@ -c $< $(CFLAGS)
obj/%.o: src/%.cpp
	$(E) C++-compiling $<
	$(Q) if [ ! -d `dirname $@` ]; then mkdir -p `dirname $@`; fi
	$(Q)$(CXX) -o $@ -c $< $(CXXFLAGS)
Makefile.dep: $(CFILES) $(CXXFILES)
	$(E) Depend
	$(Q) for i in $(^); do $(CXX) $(CXXFLAGS) -MM "$${i}" -MT obj/`basename $${i%.*}`.o; done > $@


$(BINTARGET): $(OFILES)
	$(E) Linking $@
	$(Q)$(CXX) -o $@ $(OFILES) $(LDFLAGS) $(LIBS)
clean:
	$(E) Removing files
	$(Q) rm -f $(BINTARGET) obj/* Makefile.dep
